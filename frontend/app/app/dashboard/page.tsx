import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Utilisateurs"><p className="text-gray-600">1 234</p></Card>
        <Card title="Commandes"><p className="text-gray-600">56</p></Card>
        <Card title="Actions">
          <div className="space-y-2">
            <Input label="Recherche" placeholder="Tapez ici..." />
            <Button>Valider</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}