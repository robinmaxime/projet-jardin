import { Link } from "react-router-dom";

/**
 * Composant affichant le footer
 * @returns JSX.element
 */
function Footer() {
   return (
      <footer className="footer">
         <div className="footer__content page-container">
            <div className="footer__block">
               <h3>COORDONNÉES</h3>
               <p>5 impasse des jardins</p>
               <p>75 000 Paris</p>
               <p>Tel: 06.06.06.06.06</p>
            </div>
            <div className="footer__block">
               <h3>NAVIGATION</h3>
               <Link to="/about" onClick={() => window.scroll(0, 0)}>
                  À propos
               </Link>
               <Link to="/plants" onClick={() => window.scroll(0, 0)}>
                  Nos plantes
               </Link>
               <Link to="/contact" onClick={() => window.scroll(0, 0)}>
                  Contact
               </Link>
            </div>
            <div className="footer__block">
               <h3>DIVERS</h3>
               <Link to="/Policy" onClick={() => window.scroll(0, 0)}>
                  Conditions générales
               </Link>
               <Link to="/Legal" onClick={() => window.scroll(0, 0)}>
                  Mentions légales
               </Link>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
