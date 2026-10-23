import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-6">
      <span className="text-lg font-bold text-gray-900">Skeleton</span>
      <Button variant="secondary">Connexion</Button>
    </header>
  );
}