import { createContext, useState, useEffect } from "react";

export const PlantsContext = createContext();

export const PlantsProvider = ({ children }) => {
   const [plants, setPlants] = useState([]);
   const [categories, setCategories] = useState([]);
   const [isError, setIsError] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const loadPlants = async () => {
         // Charge le fichier des plantes et des catégories
         try {
            const response = await fetch("/data/plants.json");
            const data = await response.json();
            setPlants(data.plants);
            setCategories(data.categories);
         } catch (err) {
            setIsError(true);
         }
         setIsLoading(false);
      };
      loadPlants();
   }, []);

   return (
      <PlantsContext.Provider value={{ plants, categories, isError, isLoading }}>
         {children}
      </PlantsContext.Provider>
   );
};
