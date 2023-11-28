import AboutPreview from "../../Components/AboutPreview";
import Welcome from "../../Components/Welcome";
import GalleryPreview from "../../Components/GalleryPreview";

/**
 * Composant affichant la page d'accueil
 * @returns JSX.element
 */
function Home() {
   return (
      <main className="home">
         <Welcome />
         <AboutPreview />
         <div className="separator"></div>
         <GalleryPreview />
      </main>
   );
}

export default Home;
