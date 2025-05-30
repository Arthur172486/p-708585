
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyProjects from "./pages/MyProjects";
import Community from "./pages/Community";
import Achievements from "./pages/Achievements";
import ProjectDetails from "./pages/ProjectDetails";
import UserProfile from "./pages/UserProfile";
import ProjectChat from "./pages/ProjectChat";
import ProjectProgress from "./pages/ProjectProgress";
import ProjectSettings from "./pages/ProjectSettings";
import NotFound from "./pages/NotFound";
import ProjectEquity from "./pages/ProjectEquity";
import CreateStartup from "./pages/CreateStartup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-projects" element={<MyProjects />} />
            <Route path="/community" element={<Community />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/create-startup" element={<CreateStartup />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/project/:id/chat" element={<ProjectChat />} />
            <Route path="/project/:id/progress" element={<ProjectProgress />} />
            <Route path="/project/:id/equity" element={<ProjectEquity />} />
            <Route path="/project/:id/settings" element={<ProjectSettings />} />
            <Route path="/profile" element={<UserProfile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
