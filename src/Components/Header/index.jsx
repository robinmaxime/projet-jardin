import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faXmark } from "@fortawesome/free-solid-svg-icons";
/**
 * Composant affichant le header
 * @returns JSX.element
 */
function Header() {
   const [burgerIsOpen, setBurgerIsOpen] = useState(false);

   // empeche le scroll lorsque le menu est ouvert en mobile
   useEffect(() => {
      document.body.style.overflow = burgerIsOpen ? "hidden" : "auto";
   }, [burgerIsOpen]);

   return (
      <header className="header">
         <div className="header__content page-container">
            <Link to="/" className="header__name" onClick={() => window.scroll(0, 0)}>
               Jard<span className="orange">'</span>in<span className="orange">.</span>com
            </Link>
            <nav
               className={`header__nav ${
                  burgerIsOpen ? "header__nav--opened" : "header__nav--closed"
               }`}
            >
               <NavLink
                  to="/"
                  className="header__link"
                  onClick={() => {
                     window.scroll(0, 0);
                     setBurgerIsOpen(false);
                  }}
               >
                  Accueil
               </NavLink>
               <NavLink
                  to="/about"
                  className="header__link"
                  onClick={() => {
                     window.scroll(0, 0);
                     setBurgerIsOpen(false);
                  }}
               >
                  À propos
               </NavLink>
               <NavLink
                  to="/plants"
                  className="header__link"
                  onClick={() => {
                     window.scroll(0, 0);
                     setBurgerIsOpen(false);
                  }}
               >
                  Nos plantes
               </NavLink>
               <NavLink
                  to="/contact"
                  className="header__link"
                  onClick={() => {
                     window.scroll(0, 0);
                     setBurgerIsOpen(false);
                  }}
               >
                  Contact
               </NavLink>
               <button
                  className="btn-close"
                  aria-label="fermer"
                  onClick={() => setBurgerIsOpen(false)}
               >
                  <FontAwesomeIcon icon={faXmark} />
               </button>
            </nav>

            <nav className="header__burger" onClick={() => setBurgerIsOpen(true)}>
               <FontAwesomeIcon icon={faGripLines} />
            </nav>
         </div>
      </header>
   );
}

export default Header;
