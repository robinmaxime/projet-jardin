import { useContext, useEffect, useState, useRef } from "react";
import { PlantsContext } from "../../contexts/PlantsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import Button from "../Button";
import Modal from "../Modal";
import { isInViewport } from "../../helpers";

/**
 * Composant affichant l'apperçu des plantes
 * @returns JSX.element
 */
function GaleriesPreview() {
   const { plants } = useContext(PlantsContext);
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [plantSelected, setPlantSelected] = useState();
   const [cardsClass, setCardsClass] = useState("");
   const gallery = useRef();

   useEffect(() => {
      const handleScroll = () => {
         // Test si la gallerie devient visible au scroll
         if (isInViewport(gallery.current)) {
            setCardsClass("fadein");
         }
      };
      // Ecoute l'évènement scroll
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <section className="gallery-preview page-container">
         <h2>Les nouveautés</h2>
         <div ref={gallery} className="gallery-preview__cards">
            {plants &&
               plants.slice(0, 2).map((plant, index) => (
                  <Card
                     key={`plant-${index}`}
                     imageUrl={plant.imageUrl}
                     imageDescription={plant.imageDescription}
                     name={plant.name}
                     maturityHeight={plant.maturityHeight}
                     price={plant.price}
                     sunshine={plant.sunshine}
                     watering={plant.watering}
                     onClick={() => {
                        setPlantSelected(plant);
                        setModalIsOpen(true);
                     }}
                     className={cardsClass}
                     style={{ "animation-delay": index * 0.25 + "s" }}
                  />
               ))}
            <div
               className={`card gallery-preview__info ${cardsClass}`}
               style={{ "animation-delay": "0.5s" }}
            >
               <FontAwesomeIcon icon={faSeedling} />
               <h3>Découvrez toutes nos plantes</h3>
               <p>
                  Les plantes grasses, en passant par les plantes vivaces ou caduques, découvrez nos
                  différentes plantes selon vos envies et vos besoins.
               </p>
               <Button url="/plants">Découvrir</Button>
            </div>
         </div>
         {modalIsOpen && (
            <Modal title={`Conseil - ${plantSelected.name}`} onClosed={() => setModalIsOpen(false)}>
               {plantSelected.advice}
            </Modal>
         )}
      </section>
   );
}

export default GaleriesPreview;
