import { Link, NavLink } from "react-router-dom";

/**
 * Composant affichant le header
 * @returns JSX.element
 */
function Header() {
   return (
      <header className="header">
         <div className="header__content page-container">
            <Link to="/" className="header__name" onClick={() => window.scroll(0, 0)}>
               Jard<span className="orange">'</span>in<span className="orange">.</span>com
            </Link>
            <nav className="header__nav">
               <NavLink to="/" className="header__link" onClick={() => window.scroll(0, 0)}>
                  Accueil
               </NavLink>
               <NavLink to="/about" className="header__link" onClick={() => window.scroll(0, 0)}>
                  À propos
               </NavLink>
               <NavLink to="/plants" className="header__link" onClick={() => window.scroll(0, 0)}>
                  Nos plantes
               </NavLink>
               <NavLink to="/contact" className="header__link" onClick={() => window.scroll(0, 0)}>
                  Contact
               </NavLink>
            </nav>
         </div>
      </header>
   );
}

export default Header;
