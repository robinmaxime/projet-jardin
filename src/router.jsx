import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<MainLayout />}>
               <Route path="/" element={<Home />}></Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
