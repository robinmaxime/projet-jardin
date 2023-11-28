import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
}

export default MainLayout;
