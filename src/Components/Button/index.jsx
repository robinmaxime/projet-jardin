import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Composant affichant un button permettant d'aller sur une autre page
 * @param {string} className classe à appliquer pour le boutton
 * @param {string} url url de la page à renvoyer
 * @returns JSX.element
 */
function Button({ children, className, url }) {
   return (
      <Link to={url} className={`btn ${className}`} onClick={() => window.scroll(0, 0)}>
         {children}
      </Link>
   );
}

Button.propTypes = {
   className: PropTypes.string,
   url: PropTypes.string.isRequired,
};

export default Button;
