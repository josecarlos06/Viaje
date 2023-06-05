import roma from "./../../assets/roma.jpg"
import canada from "./../../assets/canada.jpg"
import japon from "./../../assets/japon.jpg"
const Popular = () => {
   return (
      <section className="popular__container">
         <h2 className="title">Disfruta de lo maravilloso del mundo.</h2>
         <div className="popular">
            <figure className="popular__figure">
               <img src={canada} alt="" />
               <figcaption>
                  <p className="paragraph"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                     Canada</p>
               </figcaption>
            </figure>
            <figure className="popular__figure">
               <img src={roma} alt="" />
               <figcaption>
                  <p className="paragraph"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                     Roma</p>
               </figcaption>
            </figure>
            <figure className="popular__figure">
               <img src={japon} alt="" />
               <figcaption>
                  <p className="paragraph"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                     Japon</p>
               </figcaption>
            </figure>
         </div>
      </section>
   )
}

export default Popular