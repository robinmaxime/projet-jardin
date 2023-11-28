import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFeatherPointed,
   faCalendarDays,
   faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "../../Components/Hero";

/**
 * Composant affichant la page "à propos"
 * @returns JSX.element
 */
function About() {
   return (
      <main className="about page-container">
         <h1>À propos</h1>
         <div className="about__blocks">
            <div className="about__block">
               <FontAwesomeIcon icon={faFeatherPointed} />
               <p>Lorem, ipsum dolor sit amet !</p>
            </div>
            <div className="about__block">
               <FontAwesomeIcon icon={faCalendarDays} />
               <p>Lorem, ipsum dolor sit amet !</p>
            </div>
            <div className="about__block">
               <FontAwesomeIcon icon={faGraduationCap} />
               <p>Lorem, ipsum dolor sit amet !</p>
            </div>
         </div>
         <Hero
            title="L'entreprise"
            variant="left"
            imageUrl={"/assets/about_garden"}
            imageDescription="plante"
            isImageRounded={true}
         >
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti animi ea
               accusantium? Adipisci inventore voluptatibus modi impedit dolores rerum culpa
               quisquam sapiente officia. Consequuntur maiores atque, hic ab inventore corrupti
               nisi. Nemo facilis repudiandae culpa ipsum sequi nostrum odit, eum quas vitae tempore
               laboriosam aliquid explicabo reiciendis error, hic dicta tempora?
            </p>
            <p>
               Sequi consequuntur, placeat reiciendis quod odit quas minus natus modi consequatur
               adipisci pariatur explicabo incidunt ipsa voluptatem consectetur voluptatibus eum
               voluptates perspiciatis blanditiis!
            </p>
            <p>
               Facere ipsam mollitia minima unde necessitatibus dolor, tempora, tenetur eius
               repellat officia totam ea, maxime eos. Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Eveniet deleniti animi ea accusantium? Adipisci inventore
               voluptatibus modi impedit dolores rerum culpa quisquam sapiente officia.
            </p>
         </Hero>
         <Hero
            title="Une équipe pour vous orienter"
            imageUrl={"/assets/about_company"}
            imageDescription="plante"
            isImageRounded={true}
         >
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate rem nesciunt quo
               illo dolor debitis eos quasi? Harum possimus quam doloribus ipsam. Error omnis
               impedit voluptatum molestias minima cupiditate eaque corporis doloremque minus, quod
               soluta eligendi et veniam alias perferendis numquam animi ratione tenetur maxime!
               Cumque quod necessitatibus officiis amet?
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti animi ea
               accusantium? Adipisci inventore voluptatibus modi impedit dolores rerum culpa
               quisquam sapiente officia.
            </p>
            <p>
               Facere ipsam mollitia minima unde necessitatibus dolor, tempora, tenetur eius
               repellat officia totam ea, maxime eos. Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Eveniet deleniti animi ea accusantium? Adipisci inventore
               voluptatibus modi impedit dolores rerum culpa quisquam sapiente officia.
            </p>
         </Hero>
      </main>
   );
}

export default About;
