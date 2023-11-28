import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { convertCentimeterToMeter } from "../../helpers";
import Tag from "../Tag";

/**
 * Composant affichant une card
 * @param {array} imageUrl Tableau d'urls de l'image de la card
 * @param {string} imageDescription Description de l'image (ALT)
 * @param {string} name Titre de la card
 * @param {number} maturityHeight Taille finale de la plante en mm
 * @param {number} Price échelle de prix de la plante (de 1 à 3)
 * @param {number} sunshine échelle d'ensoleillement de la plante (de 1 à 3)
 * @param {number} watering échelle d'arrosage de la plante (de 1 à 3)
 * @param {func} onClick méthode à éxecuter pour afficher la modale
 * @returns JSX.element
 */
function Card({
   imageUrl,
   imageDescription,
   name,
   maturityHeight,
   price,
   sunshine,
   watering,
   onClick,
}) {
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

   return (
      <article className="card">
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
         <div className="card__text">
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
            <button className="card__button btn" onClick={onClick}>
               Conseils
            </button>
         </div>
      </article>
   );
}

Card.propTypes = {
   imageUrl: PropTypes.array.isRequired,
   imageDescription: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   maturityHeight: PropTypes.number,
   price: PropTypes.number,
   sunshine: PropTypes.number,
   watering: PropTypes.number,
   onClick: PropTypes.func.isRequired,
};

export default Card;
