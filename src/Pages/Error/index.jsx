import { Link } from "react-router-dom";

/**
 * Composant affichant la page Erreur
 * @returns JSX.element
 */
function Error() {
   return (
      <main className="error page-container">
         <h1 className="error__title">
            Erreur <span className="green">404</span>
         </h1>
         <h2 className="error__subtitle">La page demandée est introuvable</h2>
         <Link to="/" className="error__link">
            Retour à la page d'accueil
         </Link>
      </main>
   );
}

export default Error;
