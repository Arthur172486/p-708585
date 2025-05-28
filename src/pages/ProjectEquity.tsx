
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Plus, Save } from "lucide-react";
import GlassHeader from "@/components/ui/glass-header";

interface EquityMember {
  id: string;
  name: string;
  role: string;
  percentage: number;
}

const ProjectEquity = () => {
  const { id } = useParams();
  const [members, setMembers] = useState<EquityMember[]>([
    { id: '1', name: 'João Silva', role: 'Fundador/CEO', percentage: 40 },
    { id: '2', name: 'Maria Santos', role: 'CTO', percentage: 25 },
    { id: '3', name: 'Pedro Costa', role: 'Desenvolvedor', percentage: 15 },
  ]);

  const [newMember, setNewMember] = useState({ name: '', role: '', percentage: 0 });

  const addMember = () => {
    if (newMember.name && newMember.role && newMember.percentage > 0) {
      const id = Date.now().toString();
      setMembers([...members, { ...newMember, id }]);
      setNewMember({ name: '', role: '', percentage: 0 });
    }
  };

  const removeMember = (id: string) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const updateMemberPercentage = (id: string, percentage: number) => {
    setMembers(members.map(member => 
      member.id === id ? { ...member, percentage } : member
    ));
  };

  const totalPercentage = members.reduce((sum, member) => sum + member.percentage, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlassHeader />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Distribuição de Equity
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Gerencie a distribuição de porcentagem da sua startup
              </p>
            </div>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Membros da Startup
                  <div className={`text-lg ${totalPercentage === 100 ? 'text-green-500' : 'text-orange-500'}`}>
                    Total: {totalPercentage}%
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">{member.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{member.role}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          value={member.percentage}
                          onChange={(e) => updateMemberPercentage(member.id, Number(e.target.value))}
                          className="w-20"
                          min="0"
                          max="100"
                        />
                        <span className="text-gray-600 dark:text-gray-400">%</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeMember(member.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">Adicionar Novo Membro</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="name">Nome</Label>
                        <Input
                          id="name"
                          value={newMember.name}
                          onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                          placeholder="Nome do membro"
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Função</Label>
                        <Input
                          id="role"
                          value={newMember.role}
                          onChange={(e) => setNewMember({...newMember, role: e.target.value})}
                          placeholder="ex: Desenvolvedor"
                        />
                      </div>
                      <div>
                        <Label htmlFor="percentage">Porcentagem</Label>
                        <Input
                          id="percentage"
                          type="number"
                          value={newMember.percentage}
                          onChange={(e) => setNewMember({...newMember, percentage: Number(e.target.value)})}
                          placeholder="0"
                          min="0"
                          max="100"
                        />
                      </div>
                      <div className="flex items-end">
                        <Button onClick={addMember} className="w-full">
                          <Plus className="h-4 w-4 mr-2" />
                          Adicionar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Save className="h-4 w-4 mr-2" />
                Salvar Distribuição
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEquity;
