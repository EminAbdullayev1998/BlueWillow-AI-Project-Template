import React from 'react'
import videobg from '../img/videobg.mp4';

const Videobackground = () => {

  return (
    <div className='videobg'>
        <video autoPlay muted playsInline loop>
            <source src={videobg} type="video/mp4" />
        </video>

        <div className='overlay'></div>

        <div className='main-box'>
            <div className='title text-center'>
                 <h1>Join us to Create Amazing AI-Generated Images</h1>
            </div>
            <div className='subtitle text-center'>
                <p>From logos, landscapes and characters to digital artwork,  just describe the image you want and our AI image generating tool will create the perfect graphic for your project. It’s all FREE.</p>
            </div>
            <div className='button1 d-flex align-items-center justify-content-center'>
                <button>JOIN the FREE BETA</button>
            </div>
            <div className='button2 d-flex align-items-center justify-content-center'>
                <button>Learn More <i className="fa-solid fa-circle-play"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Videobackground