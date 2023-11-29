import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../Components/ScrollToTop";

function MainLayout() {
   return (
      <>
         <ScrollToTop />
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}

export default MainLayout;
