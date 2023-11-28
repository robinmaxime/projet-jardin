import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Legal from "./Pages/Legal";
import Policy from "./Pages/Policy";
import Error from "./Pages/Error";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<MainLayout />}>
               <Route path="/" element={<Home />}></Route>
               <Route path="/about" element={<About />}></Route>
               <Route path="/plants" element={<Gallery />}></Route>
               <Route path="/contact" element={<Contact />}></Route>
               <Route path="/legal" element={<Legal />}></Route>
               <Route path="/policy" element={<Policy />}></Route>
               <Route path="*" element={<Error />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
