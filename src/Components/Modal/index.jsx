import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

/**
 *
 * Composant affichant la modale
 * @returns JSX.element
 */
function Modal({ children, title, onClosed }) {
   return (
      <div className="modal" onClick={onClosed}>
         <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={onClosed}>
               <FontAwesomeIcon icon={faXmark} />
            </button>
            <h3 className="modal__title">{title}</h3>
            <div>{children}</div>
         </div>
      </div>
   );
}

Modal.propTypes = {
   title: PropTypes.string.isRequired,
   onClosed: PropTypes.func.isRequired,
};

export default Modal;
