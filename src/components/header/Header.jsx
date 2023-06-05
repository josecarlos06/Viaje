import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="header">
      <Navbar/>
      <div className="hero__container">
         <div className="hero__text">
            <h1 className="heading">
               <span>Bienvenido a el viaje</span>
               Explora el mundo
            </h1>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo itaque in magnam porro incidunt excepturi!</p>
            <a href="#" className="bton">Comienza tu viaje</a>
         </div>
      </div>
    </header>
  )
}

export default Header