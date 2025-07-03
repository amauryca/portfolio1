import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import ProjectRubiks from "@/pages/project-rubiks";
import ProjectMentalHealth from "@/pages/project-mental-health";
import ProjectScentMemory from "@/pages/project-scent-memory";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/rubiks-cube" component={ProjectRubiks} />
      <Route path="/project/mental-health" component={ProjectMentalHealth} />
      <Route path="/project/scent-memory" component={ProjectScentMemory} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
