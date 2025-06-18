
import { Link } from 'react-router-dom';
import { Users, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sistema de Gerenciamento Acadêmico
          </h1>
          <p className="text-xl text-gray-600">
            Gerencie alunos e professores de forma simples e eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-gray-800">Alunos</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Gerencie informações dos alunos, matrículas e dados pessoais
              </p>
              <Link to="/alunos">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Acessar Módulo de Alunos
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-gray-800">Professores</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Gerencie informações dos professores e suas matrículas
              </p>
              <Link to="/professores">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Acessar Módulo de Professores
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
