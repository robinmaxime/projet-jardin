import PropTypes from "prop-types";
import Button from "../Button";

/**
 * Composant affichant un Hero
 * @param {string} title Titre du Hero
 * @param {string} buttonText Titre du bouton dans le Hero
 * @param {string} buttonUrl Adresse Url du bouton
 * @param {bool} isImageRounded indique si l'image doit avoir les coins arrondis
 * @param {string} imageUrl Adresse Url de l'image
 * @param {string} imageDescription Description de l'image (ALT)

 * @returns JSX.element
 */
function Hero({
   children,
   title,
   buttonText,
   buttonUrl,
   isImageRounded,
   variant,
   imageUrl,
   imageDescription,
}) {
   return (
      <article className={`hero ${variant ? `hero--${variant}` : ""}`}>
         <div className="hero__text">
            {title && <h2>{title}</h2>}
            <div>{children}</div>
            {buttonText && (
               <Button className="hero__btn" url={buttonUrl}>
                  {buttonText}
               </Button>
            )}
         </div>

         <div className={`hero__image ${isImageRounded ? "hero__image--rounded" : ""}`}>
            <picture>
               <source srcSet={`${imageUrl}.webp`} type="image/webp" />
               <img src={`${imageUrl}.jpg`} alt={imageDescription} />
            </picture>
         </div>
      </article>
   );
}

Hero.propTypes = {
   title: PropTypes.string,
   buttonText: PropTypes.string,
   buttonUrl: PropTypes.string,
   isImageRounded: PropTypes.bool,
   variant: PropTypes.string,
   imageUrl: PropTypes.string,
   imageDescription: PropTypes.string,
};

export default Hero;
