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
