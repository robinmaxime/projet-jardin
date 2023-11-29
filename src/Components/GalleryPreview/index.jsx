import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
   const navigate = useNavigate();

   return (
      <section className="gallery-preview page-container">
         <h2>Les nouveautés</h2>
         <div className="gallery-preview__cards">
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
                     animated={true}
                     style={{ animationDelay: index * 0.25 + "s" }}
                  />
               ))}
            <Card
               icon={<FontAwesomeIcon icon={faSeedling} />}
               name="Découvrez toutes nos plantes"
               description="Les plantes grasses, en passant par les plantes vivaces ou caduques, découvrez nos
               différentes plantes selon vos envies et vos besoins."
               onClick={() => {
                  navigate("/plants");
                  window.scroll(0, 0);
               }}
               buttonTitle="Découvrir"
               animated={true}
               className="gallery-preview__info"
               style={{ animationDelay: 2 * 0.25 + "s" }}
            />
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
