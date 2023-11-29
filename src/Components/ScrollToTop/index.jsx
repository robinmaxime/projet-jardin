import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

/**
 * Composant permettant de scroller vers le haut de la page
 * @returns JSX.element
 */
function ScrollToTop() {
   const [isHidden, setIsHidden] = useState(true);

   useEffect(() => {
      const handleScroll = () => {
         setIsHidden(window.scrollY < 30);
      };
      // Ajoute un écouteur d'évènement
      window.addEventListener("scroll", handleScroll);
      return () => {
         // Retire l'écouteur d'évènement au cas où il soit démonté
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div
         className={`scrolltotop ${isHidden ? "scrolltotop--hidden" : ""}`}
         onClick={() => window.scroll(0, 0)}
      >
         <FontAwesomeIcon icon={faArrowUpLong} />
      </div>
   );
}

export default ScrollToTop;
