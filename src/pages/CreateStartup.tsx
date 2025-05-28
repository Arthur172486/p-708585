
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Rocket } from "lucide-react";
import GlassHeader from "@/components/ui/glass-header";

const CreateStartup = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    stage: '',
    equity: '',
    timeline: '',
    budget: ''
  });

  const [neededRoles, setNeededRoles] = useState<string[]>([]);
  const [newRole, setNewRole] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  const addRole = () => {
    if (newRole && !neededRoles.includes(newRole)) {
      setNeededRoles([...neededRoles, newRole]);
      setNewRole('');
    }
  };

  const removeRole = (role: string) => {
    setNeededRoles(neededRoles.filter(r => r !== role));
  };

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Criando startup:', { ...formData, neededRoles, skills });
    // Aqui seria implementada a lógica de criação
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlassHeader />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Criar Minha Ideia de Startup
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Publique sua ideia e encontre os co-fundadores ideais
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Informações Básicas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Nome da Startup</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="ex: EcoTrack VR"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Descrição da Ideia</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Descreva sua ideia de startup em detalhes..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Categoria</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Tecnologia</SelectItem>
                          <SelectItem value="fintech">Fintech</SelectItem>
                          <SelectItem value="healthcare">Saúde</SelectItem>
                          <SelectItem value="education">Educação</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="sustainability">Sustentabilidade</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="stage">Estágio Atual</Label>
                      <Select value={formData.stage} onValueChange={(value) => setFormData({...formData, stage: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o estágio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="idea">Apenas Ideia</SelectItem>
                          <SelectItem value="prototype">Protótipo</SelectItem>
                          <SelectItem value="mvp">MVP</SelectItem>
                          <SelectItem value="early-stage">Estágio Inicial</SelectItem>
                          <SelectItem value="growth">Crescimento</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Funções Necessárias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      placeholder="ex: Desenvolvedor Frontend, Designer UX..."
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRole())}
                    />
                    <Button type="button" onClick={addRole}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {neededRoles.map((role) => (
                      <Badge key={role} variant="secondary" className="flex items-center gap-1">
                        {role}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => removeRole(role)}
                        />
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Habilidades Técnicas Necessárias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="ex: React, Python, Figma, Marketing Digital..."
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    />
                    <Button type="button" onClick={addSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="flex items-center gap-1">
                        {skill}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => removeSkill(skill)}
                        />
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Detalhes do Projeto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="equity">Equity Oferecido (%)</Label>
                      <Input
                        id="equity"
                        value={formData.equity}
                        onChange={(e) => setFormData({...formData, equity: e.target.value})}
                        placeholder="ex: 10-20%"
                      />
                    </div>

                    <div>
                      <Label htmlFor="timeline">Timeline</Label>
                      <Input
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        placeholder="ex: 6 meses"
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget">Orçamento Inicial</Label>
                      <Input
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        placeholder="ex: R$ 50.000"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button type="submit" size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Rocket className="h-5 w-5 mr-2" />
                  Publicar Minha Startup
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStartup;
