import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Threads Clone UI — Demo</h1>

      <div className="flex items-center gap-3">
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button variant="outline" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <div className="ml-4">
          Count: <strong>{count}</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
