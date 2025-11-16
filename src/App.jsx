import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="p-8 space-y-4">
      <div className="flex items-center gap-3">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary" size="lg">
          Secondary Large
        </Button>
      </div>
    </div>
  );
}

export default App;
