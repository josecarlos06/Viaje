import espana from "./../../assets/espana.jpg"
const About = () => {
  return (
    <main className="about about__container">
      <div className="about__text">
         <h2 className="title">Leé más sobre viajes.com</h2>
         <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum minima, assumenda impedit nobis nisi, maxime blanditiis minus incidunt, tempore illum! Sequi voluptatibus similique laudantium saepe quasi non quis autem?</p>
         <a href="#" className="bton">Explorar viaje</a>
      </div>
      <figure className="about__figure">
         <img src={espana} alt="" />
      </figure>
    </main>
  )
}

export default About