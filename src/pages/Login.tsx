
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, Sparkles, Github, Chrome } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">Solvearn</span>
          </div>
          <p className="text-slate-400">Entre na sua conta e descubra projetos incríveis</p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-white">
              Bem-vindo de volta
            </CardTitle>
            <CardDescription className="text-center text-slate-300">
              Faça login para continuar sua jornada
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-orange-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-200">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 bg-white/5 border-white/20 text-white placeholder-slate-400 focus:border-orange-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 text-slate-300">
                  <input type="checkbox" className="rounded border-white/20" />
                  <span>Lembrar de mim</span>
                </label>
                <Link to="/forgot-password" className="text-orange-400 hover:text-orange-300">
                  Esqueceu a senha?
                </Link>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg font-semibold"
              >
                Entrar
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-800 px-2 text-slate-400">Ou continue com</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                <Chrome className="h-5 w-5 mr-2" />
                Google
              </Button>
            </div>
            
            <div className="text-center text-sm text-slate-300">
              Não tem uma conta?{" "}
              <Link to="/register" className="text-orange-400 hover:text-orange-300 font-medium">
                Criar conta
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8 text-xs text-slate-500">
          © 2024 Solvearn. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default Login;
