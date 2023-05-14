import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/harsh-srivastav2024/" className="home__social-icon" target="_blank">
         <i class="uil uil-linkedin"></i>
        </a> 
        <a href="https://github.com/" className="home__social-icon" target="_blank">
        <i class="uil uil-github"></i>
        </a>
        <a href="https://www.instagram.com/_naagbhairava/" className="home__social-icon" target="_blank">
            <i class="uil uil-instagram"></i>
        </a>
    </div>
  )
}

export default Social





// import React, { useState } from 'react'
// import '../styles/header.css'

// const Header = () => {

//    window.addEventListener("scroll", function () { 
//       const header = document.querySelector(".header");
  
//   // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
//    if (this.scrolly >= 80) header.classList.add("scroll-header");
  
//   else header.classList.remove("scroll-header");
  
//   })
  

//     const[Toggle,showMenu] = useState(false);
//     const [activeNav,setActiveNav] = useState("#home")
//   return (

// <header className="header">
// <nav className="nav container">

//     <a href="index.html" className='nav__logo'>Harsh</a>

//     <div className={Toggle ? "nav__menu show_menu" : 
//     "nav__menu"}>
//      <ul className="nav__list">
//      <li className="nav__item">
//         <a href="#home"  onClick={()=> setActiveNav('#home')} className="nav__link">
//         <i className="uil uil-estate nav__icon"></i>Home 
//         </a>
//      </li>

//      <li style={{color:'#990033'}} className="nav__item">
//         <a href="#about" className="nav__link">
//         <i className="uil uil-user nav__icon"></i>About 
//         </a>
//      </li>

//      <li className="nav__item">
//         <a href="#skills" className="nav__link">
//         <i className="uil uil-file-alt nav__icon"></i>Timeline 
//         </a>
//      </li>

//      <li className="nav__item">
//         <a href="#contact" className="nav__link">
//         <i className="uil uil-message nav__icon"></i>Contact 
//         </a>
//      </li>
//         </ul>

//         <i class="uil uil-times nav__close"  onClick={()=> showMenu(!Toggle)}></i>
//     </div>
//      <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
//      <i class="uil uil-apps"></i>
//      </div>
// </nav>

//     </header>
//   )
// }

// export default Header