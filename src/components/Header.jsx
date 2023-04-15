import React, { useEffect } from 'react'
import logo from '../img/bluewillowlogo.png'

const Header = () => {

  useEffect(()=>{
    const hamburger = document.getElementById('check');
    const menu = document.getElementById('burgerMenu');

    hamburger.onclick = ()=>{
        if (menu.style.display === "none") {
            menu.style.display = "block";
        }else{
            menu.style.display = "none";
        }
    }
  })

  return (
    <header className='container-fluid d-flex align-items-center justify-content-center'>

        <div className='container d-flex justify-content-between main-box'>

            <div className='col-7 col-sm-5 col-lg-3 d-flex align-items-center justify-content-center logo'>
                <img className='navimg' src={logo} alt="error" width="90%" height="50px" />
            </div>

            <div className='col-5 d-none d-lg-flex align-items-center justify-content-center nav'>
                <ul className='container d-flex align-items-center justify-content-between'>
                    <a href="#about"><li>About</li></a>
                    <a href="#careers"><li>Careers</li></a>
                    <a href="#howitworks"><li>How it works</li></a>
                    <a href="#contact"><li>Contact Us</li></a>
                </ul>
            </div>

            <div className=' col-sm-5 col-lg-3 d-none d-sm-flex align-items-center justify-content-center join'>
                 <button><i className="fa-brands fa-discord"></i> Join Free Beta</button>
            </div>

            <div className='col-4 col-sm-2 d-flex d-lg-none align-items-center justify-content-center burger' id='burger'>
                <label for="check">
                  <input type="checkbox" id="check"/> 
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
            </div>


            <div id='burgerMenu' style={{display: "none"}}>
                 <div className='main-box'>
                     <div className='nav'>
                         <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>How it works</li>
                            <li>Blog</li>
                         </ul>
                     </div>
                 </div>

                 <div className='button'>
                     <button><i className="fa-brands fa-discord"></i> Join Free Beta</button>
                 </div>
            </div>

        </div>

    </header>
  )
}

export default Header