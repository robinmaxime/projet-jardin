import Router from "./router";
import { PlantsProvider } from "./contexts/PlantsContext";

function App() {
   return (
      <PlantsProvider>
         <Router />
      </PlantsProvider>
   );
}

export default App;
