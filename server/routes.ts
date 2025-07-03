import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { createTransporter } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createContactMessage(validatedData);
      
      // Send email
      try {
        const transporter = createTransporter();
        
        await transporter.sendMail({
          from: process.env.EMAIL_FROM || "noreply@example.com",
          to: "amaurycacevedo@gmail.com",
          subject: `New Contact Form Submission - ${validatedData.project}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Project Type:</strong> ${validatedData.project}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
        });
        
        res.json({ success: true, message: "Message sent successfully!" });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Still return success since we stored the message
        res.json({ success: true, message: "Message received! I'll get back to you soon." });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ success: false, message: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
