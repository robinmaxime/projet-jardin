import { Link } from "react-router-dom";

/**
 * Composant affichant la page "mentions légales"
 * @returns JSX.element
 */
function Legal() {
   return (
      <main className="legal page-container">
         <h1>Mentions légales</h1>
         <h2 className="legal__subtitle">Éditeur</h2>
         <p>Maxime ROBIN</p>
         <p>
            <Link to="https://www.maximerobindev.com">https://www.maximerobindev.com</Link>
         </p>
         <h2 className="legal__subtitle">Crédit photos</h2>
         <p>
            <a href="https://fr.freepik.com/vecteurs-libre/illustration-concept-campagne-e-mail_7472011.htm#query=contact&position=18&from_view=search&track=sph&uuid=bb4e2eb1-caa2-4343-b168-e3b452fa4d34">
               Image de storyset
            </a>{" "}
            sur Freepik
         </p>
         <p>
            <a href="https://fr.freepik.com/photos-gratuite/heureuse-femme-travaillant-dans-jardin-cultiver-plantes-pots-couper-branches-secateur-concept-travail-jardinage_11622880.htm#query=jardinerie&position=11&from_view=search&track=sph&uuid=26a45956-f310-42fb-b5e7-e0bb449afca8">
               Image de pch.vector
            </a>{" "}
            sur Freepik
         </p>
         <p>
            <a href="https://fr.freepik.com/photos-gratuite/concept-reussite-commerciale-vue-dessus-table-bois-mains-protegeant-figures-bois-personnes_9426580.htm#query=collegue&position=0&from_view=search&track=sph&uuid=974d50d4-4098-46d9-a854-04d32414b318">
               Image de 8photo
            </a>{" "}
            sur Freepik
         </p>
         <h2 className="legal__subtitle">Hébergement</h2>
         <p>o2switch SAS</p>
         <p>Chemin des Pardiaux</p>
         <p>63000 Clermont-Ferrand</p>
         <p>France</p>
         <p>Téléphone : +33 (0)4 44 44 60 40</p>
      </main>
   );
}

export default Legal;
