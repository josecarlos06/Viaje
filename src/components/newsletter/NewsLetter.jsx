import espana from "./../../assets/espana.jpg"
const NewsLetter = () => {
  return (
   <section className="new new__container">
      <figure className="new__figure">
         <img src={espana} alt="" />
      </figure>
      <div className="new__text">
         <h2 className="title">Tu viaje comienza aquí</h2>
         <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum minima, assumenda impedit nobis nisi</p>
         <form className="formulario">
            <input type="email" name="email" id="email" className="new__input" placeholder="Ingresa tu correo electronico"/>
            <input type="submit" value="Suscribete" className="new__submit" />
         </form>
      </div>
    </section>
  )
}

export default NewsLetter