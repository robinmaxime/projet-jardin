import { useContext, useMemo, useState } from "react";
import { PlantsContext } from "../../contexts/PlantsContext";
import Card from "../../Components/Card";
import Modal from "../../Components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * Composant affichant la page "nos plantes"
 * @returns JSX.element
 */
function Gallery() {
   const { plants, categories } = useContext(PlantsContext);
   const [categorySelected, setCategorySelected] = useState(0);
   const [selectedSort, setSelectedSort] = useState("choose");
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [plantSelected, setPlantSelected] = useState();
   const [mobileFilterIsOpen, setMobileFilterIsOpen] = useState(false);
   const [random, setRandom] = useState(Math.random());

   const plantsFiltered = useMemo(() => {
      let filtered;
      // Filtre les plantes selon leur catégorie
      if (categorySelected === 0) {
         filtered = plants;
      } else {
         filtered = plants.filter((plant) => plant.categoryId === categorySelected);
      }
      // trie les plantes selon le prix, l'ensoleillement, l'arrosage ou la hauteur
      switch (selectedSort) {
         case "price-asc":
            filtered.sort((a, b) => a.price - b.price);
            break;
         case "price-desc":
            filtered.sort((a, b) => b.price - a.price);
            break;
         case "sunshine-asc":
            filtered.sort((a, b) => a.sunshine - b.sunshine);
            break;
         case "sunshine-desc":
            filtered.sort((a, b) => b.sunshine - a.sunshine);
            break;
         case "watering-asc":
            filtered.sort((a, b) => a.watering - b.watering);
            break;
         case "watering-desc":
            filtered.sort((a, b) => b.watering - a.watering);
            break;
         case "height-asc":
            filtered.sort((a, b) => a.maturityHeight - b.maturityHeight);
            break;
         case "height-desc":
            filtered.sort((a, b) => b.maturityHeight - a.maturityHeight);
            break;
         default:
            break;
      }

      setRandom(Math.random()); // permet l'animation des cards quand un filtre est appliqué

      return filtered;
   }, [plants, categorySelected, selectedSort]);

   return (
      <main className="gallery page-container">
         <h1>Nos plantes</h1>
         <div
            className={`gallery__filter ${
               mobileFilterIsOpen ? "gallery__filter--opened" : "gallery__filter--closed"
            }`}
         >
            <button
               className="btn-close gallery__btn-close"
               onClick={() => setMobileFilterIsOpen(false)}
               aria-label="fermer"
            >
               <FontAwesomeIcon icon={faXmark} />
            </button>
            <button
               className={`gallery__btn ${categorySelected === 0 ? "gallery__btn--selected" : ""}`}
               onClick={() => {
                  setCategorySelected(0);
                  setMobileFilterIsOpen(false);
               }}
            >
               Toutes
            </button>

            {categories.map((category, index) => (
               <button
                  key={`category-${index}`}
                  className={`gallery__btn ${
                     categorySelected === category.id ? "gallery__btn--selected" : ""
                  } `}
                  onClick={() => {
                     setCategorySelected(category.id);
                     setMobileFilterIsOpen(false);
                  }}
               >
                  {category.name}
               </button>
            ))}
         </div>
         <button className="btn gallery__open-filter" onClick={() => setMobileFilterIsOpen(true)}>
            Filtrer par :{" "}
            {categorySelected === 0
               ? "Toutes"
               : categories.find((category) => category.id === categorySelected)?.name ??
                 "non défini"}
         </button>
         <div className="gallery__sort-blocks">
            <div>
               {plantsFiltered.length > 1
                  ? `${plantsFiltered.length} plantes trouvées`
                  : `${plantsFiltered.length} plante trouvée`}
            </div>
            <div>
               <label>Trier par : </label>
               <select onChange={(e) => setSelectedSort(e.target.value)} value={selectedSort}>
                  <option value="choose">Choisir...</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="sunshine-asc">Ensoleillement croissant</option>
                  <option value="sunshine-desc">Ensoleillement décroissant</option>
                  <option value="watering-asc">Arrosage croissant</option>
                  <option value="watering-desc">Arrosage décroissant</option>
                  <option value="height-asc">Hauteur croissante</option>
                  <option value="height-desc">Hauteur décroissante</option>
               </select>
            </div>
         </div>
         <section className="gallery__cards">
            {plantsFiltered.map((plant, index) => (
               <Card
                  key={`plant-${random}-${index}`}
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
                  className="fadein"
                  style={{ animationDelay: (index + 1) * 0.25 + "s" }}
               />
            ))}
         </section>
         {modalIsOpen && (
            <Modal title={`Conseil - ${plantSelected.name}`} onClosed={() => setModalIsOpen(false)}>
               {plantSelected.advice}
            </Modal>
         )}
      </main>
   );
}

export default Gallery;
