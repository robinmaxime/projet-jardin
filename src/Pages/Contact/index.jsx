import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

/**
 * Composant affichant la page "contact"
 * @returns JSX.element
 */
function Contact() {
   return (
      <main className="contact page-container">
         <h1>Contact</h1>
         <div className="contact__content">
            <aside className="contact__aside">
               <p>Une question ?</p>
               <p>Un projet ?</p>
               <p>N'hésitez pas à nous contacter !</p>
            </aside>
            <section className="contact__section">
               <div className="contact__blocks">
                  <div className="contact__block">
                     <p>
                        <FontAwesomeIcon icon={faPaperPlane} /> <strong>Par e-mail :</strong>
                     </p>
                     <p>
                        Écrivez nous à l'adresse email : exemple@exemple.com. Nous vous répondrons
                        dans les plus bref délais.
                     </p>
                  </div>
                  <div className="contact__block">
                     <p>
                        <FontAwesomeIcon icon={faMobileScreen} /> <strong>Par téléphone :</strong>
                     </p>
                     <p>Appelez nous au 06.06.06.06.06 du lundi au vendredi entre 09h00 et 18h00</p>
                  </div>
                  <div className="contact__block">
                     <p>
                        <FontAwesomeIcon icon={faRectangleList} />{" "}
                        <strong>Formulaire de contact :</strong>
                     </p>
                     <form className="contact__form">
                        <div className="contact__fields">
                           <input type="text" name="name" id="name" required placeholder="Nom *" />
                           <input
                              type="email"
                              name="email"
                              id="email"
                              required
                              placeholder="E-mail *"
                           />
                           <textarea
                              name="message"
                              id="message"
                              required
                              placeholder="Message *"
                              rows="5"
                              aria-labelledby="message"
                           />
                        </div>
                        <div>
                           <button className="btn contact__btn" type="submit">
                              Envoyer
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </section>
         </div>
      </main>
   );
}

export default Contact;
