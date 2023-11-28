import AboutPreview from "../../Components/AboutPreview";
import Welcome from "../../Components/Welcome";

/**
 * Composant affichant la page d'accueil
 * @returns JSX.element
 */
function Home() {
   return (
      <main className="home">
         <Welcome />
         <AboutPreview />
      </main>
   );
}

export default Home;
