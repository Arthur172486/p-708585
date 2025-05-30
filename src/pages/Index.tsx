
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Solvearn</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Entrar
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Conecte-se aos
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Melhores Projetos
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Descubra startups inovadoras, conecte-se com empreendedores visionários e construa o futuro junto com pessoas incríveis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
                Explorar Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4">
                Fazer Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Networking</h3>
            <p className="text-slate-400">Conecte-se com profissionais talentosos e forme parcerias estratégicas</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Oportunidades</h3>
            <p className="text-slate-400">Encontre projetos alinhados com suas habilidades e objetivos</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto">
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Crescimento</h3>
            <p className="text-slate-400">Desenvolva suas habilidades e acelere sua carreira</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
