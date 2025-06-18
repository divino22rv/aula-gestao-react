
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlunosList from "./pages/AlunosList";
import AlunoForm from "./pages/AlunoForm";
import AlunoView from "./pages/AlunoView";
import ProfessoresList from "./pages/ProfessoresList";
import ProfessorForm from "./pages/ProfessorForm";
import ProfessorView from "./pages/ProfessorView";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rotas de Alunos */}
          <Route path="/alunos" element={<AlunosList />} />
          <Route path="/alunos/cadastrar" element={<AlunoForm />} />
          <Route path="/alunos/editar/:id" element={<AlunoForm />} />
          <Route path="/alunos/visualizar/:id" element={<AlunoView />} />
          
          {/* Rotas de Professores */}
          <Route path="/professores" element={<ProfessoresList />} />
          <Route path="/professores/cadastrar" element={<ProfessorForm />} />
          <Route path="/professores/editar/:id" element={<ProfessorForm />} />
          <Route path="/professores/visualizar/:id" element={<ProfessorView />} />
          
          {/* Rota 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
