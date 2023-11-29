import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { convertCentimeterToMeter, isInViewport } from "../../helpers";
import Tag from "../Tag";

/**
 * Composant affichant une card
 * @param {JSX.element} icon élément JSX d'icône
 * @param {array} imageUrl Tableau d'urls de l'image de la card
 * @param {string} imageDescription Description de l'image (ALT)
 * @param {string} name Titre de la card
 * @param {number} maturityHeight Taille finale de la plante en mm
 * @param {number} price échelle de prix de la plante (de 1 à 3)
 * @param {number} sunshine échelle d'ensoleillement de la plante (de 1 à 3)
 * @param {number} watering échelle d'arrosage de la plante (de 1 à 3)
 * @param {string} description Conseil d'entretien
 * @param {func} onClick méthode à éxecuter pour afficher la modale
 * @param {string} buttonTitle titre du bouton
 * @param {string} className classe à affecter à la card
 * @param {object} style applique le style css
 * @param {boolean} animated animation de la carte lorsqu'elle apparait dans le viewport
 * @returns JSX.element
 */
function Card({
   icon,
   imageUrl,
   imageDescription,
   name,
   maturityHeight,
   price,
   sunshine,
   watering,
   description,
   onClick,
   buttonTitle,
   className,
   animated,
   style,
}) {
   const [cardClass, setCardClass] = useState("");
   const cardRef = useRef();

   // Ajoute les symboles sunshine, watering et price selon leur quantité
   let priceSymbol = "";
   let sunSymbol = "";
   let waterSymbol = "";

   for (let i = 0; i < sunshine; i++) {
      sunSymbol += "☀️";
   }
   for (let i = 0; i < watering; i++) {
      waterSymbol += "💧";
   }
   for (let i = 0; i < price; i++) {
      priceSymbol += "€";
   }

   useEffect(() => {
      const handleScroll = () => {
         // Test si la gallerie devient visible au scroll
         if (animated && isInViewport(cardRef.current)) {
            setCardClass("fadein");
         }
      };
      // Ecoute l'évènement scroll
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [animated]);

   return (
      <article
         ref={cardRef}
         className={`card ${className ? className : ""} ${cardClass}`}
         style={style}
      >
         {imageUrl && imageDescription && (
            <picture>
               <source
                  srcSet={imageUrl.find((element) => element.endsWith(".webp"))}
                  type="image/webp"
               />
               <img
                  src={imageUrl.find((element) => element.endsWith(".jpg"))}
                  alt={imageDescription}
               />
            </picture>
         )}

         <div className="card__text">
            {icon && <div className="card__icon">{icon}</div>}
            <div className="card__name">{name}</div>
            <div className="card__tags">
               {maturityHeight && (
                  <Tag>
                     <>
                        <FontAwesomeIcon icon={faArrowsUpDown} />
                        {convertCentimeterToMeter(maturityHeight)}
                     </>
                  </Tag>
               )}
               {price && <Tag>{priceSymbol}</Tag>}
               {sunshine && <Tag>{sunSymbol}</Tag>}
               {watering && <Tag>{waterSymbol}</Tag>}
            </div>
            {description && <div className="card__description">{description}</div>}
            <button className="card__button btn" onClick={onClick}>
               {buttonTitle}
            </button>
         </div>
      </article>
   );
}

Card.propTypes = {
   icon: PropTypes.element,
   imageUrl: PropTypes.array,
   imageDescription: PropTypes.string,
   name: PropTypes.string.isRequired,
   maturityHeight: PropTypes.number,
   price: PropTypes.number,
   sunshine: PropTypes.number,
   watering: PropTypes.number,
   description: PropTypes.string,
   onClick: PropTypes.func.isRequired,
   buttonTitle: PropTypes.string,
   className: PropTypes.string,
   style: PropTypes.object,
   animated: PropTypes.bool,
};

Card.defaultProps = {
   buttonTitle: "Conseils",
};

export default Card;
