/**
 * Composant affichant la bannière d'accueil
 * @returns JSX.element
 */
function Welcome() {
   return (
      <section className="welcome">
         <div className="welcome__content page-container">
            <div className="welcome__text">
               <h1 className="welcome__title">
                  BIENVENUE DANS VOTRE JARD<span className="orange">'</span>IN
               </h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit ipsa
                  minus dolorum accusantium qui inventore eveniet iure sint, odio nobis totam
                  dolorem, enim ab laudantium quisquam explicabo sapiente corrupti magnam sit vel
                  tempora est? Ut animi beatae et rerum voluptas quidem nostrum nulla dolorum,
                  magnam optio praesentium ad accusamus.
               </p>
            </div>
            <div className="welcome__image">
               <picture>
                  <source srcSet="/assets/employe.webp" type="image/webp" />
                  <img src="/assets/employe.jpg" alt="Employé dans l'entreprise" />
               </picture>
            </div>
         </div>
      </section>
   );
}

export default Welcome;
