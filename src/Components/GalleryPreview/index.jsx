import { useContext, useState } from "react";
import { PlantsContext } from "../../contexts/PlantsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import Button from "../Button";
import Modal from "../Modal";

/**
 * Composant affichant l'apperçu des plantes
 * @returns JSX.element
 */
function GaleriesPreview() {
   const { plants } = useContext(PlantsContext);
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [plantSelected, setPlantSelected] = useState();

   return (
      <section className="galeries-preview page-container">
         <h2>Les nouveautés</h2>
         <div className="galeries-preview__cards">
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
                  />
               ))}
            <div className="card galeries-preview__info">
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
