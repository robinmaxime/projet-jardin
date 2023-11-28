import Hero from "../../Components/Hero";

/**
 * Composant affichant l'apperçu de "découvrez-nous"
 * @returns JSX.element
 */
function AboutPreview() {
   return (
      <section className="about-preview page-container">
         <h2>Découvrez-nous</h2>
         <Hero
            isImageRounded={true}
            variant="left"
            imageUrl="/assets/jardiniers"
            imageDescription="Jardiniers"
            buttonText="En savoir plus"
            buttonUrl="/about"
         >
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit ipsa
               minus dolorum accusantium qui inventore eveniet iure sint, odio nobis totam dolorem,
               enim ab laudantium quisquam explicabo sapiente corrupti magnam sit vel tempora est?
               Ut animi beatae et rerum voluptas quidem nostrum nulla dolorum, magnam optio
               praesentium ad accusamus.
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit ipsa
               minus dolorum accusantium qui inventore eveniet iure sint, odio nobis totam dolorem,
               enim ab laudantium quisquam explicabo sapiente corrupti magnam sit vel tempora est?
            </p>
         </Hero>
      </section>
   );
}

export default AboutPreview;
