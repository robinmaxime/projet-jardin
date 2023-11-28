import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<MainLayout />}>
               <Route path="/" element={<Home />}></Route>
               <Route path="/about" element={<About />}></Route>
               <Route path="/plants" element={<Gallery />}></Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
