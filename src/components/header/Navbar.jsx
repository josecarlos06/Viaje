import { useState } from "react"

const Navbar = () => {

   const [toggle, setToggle] = useState(false);
   return (
      <nav className='nav'>
         <div className="nav__container">
            <a href="#" className='nav__logo'>Viajes.com</a>

            <ul className={`${toggle ? 'active' : ''} nav__ul`}>
               <li className="nav__li">
                  <a href="#" className="link">Inicio</a>
               </li>
               <li className="nav__li">
                  <a href="#" className="link">Nosotros</a>
               </li>
               <li className="nav__li">
                  <a href="#" className="link">Popular</a>
               </li>
               <li className="nav__li">
                  <a href="#" className="link">Explora</a>
               </li>
               <li>
                  <button onClick={e => setToggle(!toggle)} className="close">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close__icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </button>
               </li>
            </ul>

            <button onClick={e => setToggle(!toggle)} className="button__open">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="open__icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>

            </button>
         </div>
      </nav>
   )
}

export default Navbar