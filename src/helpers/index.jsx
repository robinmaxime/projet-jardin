/**
 * Convertit un nombre en mètre
 * @param {number} unit nombre en cm a convertir en m
 * @returns le nombre converti en mètre ou en centimètre si - de 1m
 */
export const convertCentimeterToMeter = (unit) => {
   if (unit < 100) {
      return unit + "cm";
   }

   const meter = unit / 100;

   return (
      new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(
         meter
      ) + "m"
   );
};

/**
 * Indique si l'élément du DOM est visible dans le viewport
 * @param {object} element element du DOM
 * @returns Boolean
 */
export const isInViewport = (element) => {
   // obtient les coordonnées de l'élément (top, left, bottom, right)
   const rect = element.getBoundingClientRect();
   // obtient la position de la moitié du block (axe Y)
   const midY = rect.top + rect.height / 3;
   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      midY <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
};
