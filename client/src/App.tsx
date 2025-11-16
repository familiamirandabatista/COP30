import { Switch, Route, Router } from "wouter"; // 1. Importei o 'Router'
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";

// A sua função 'Router' (que eu renomeei para 'AppRoutes' para evitar confusão)
function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* 2. Adicionei o Router 'base' aqui, "envelopando" suas rotas */}
        <Router base="/COP30">
          <AppRoutes /> {/* Chamei a função renomeada aqui */}
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;