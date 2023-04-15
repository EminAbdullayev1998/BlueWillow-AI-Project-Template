import React from 'react'

const About = () => {
  return (
    <div className='about-box' id='about'>
        <div className='main-box'>
            <div className='video-box'>
                <iframe width="660" height="400" src="https://www.youtube.com/embed/PkL9jxI9-ME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='text-box'>
                <div className='title'>
                    <h2>Unleash your creativity</h2>
                </div>
                <div className='text'>
                    <p>BlueWillow AI can take any prompt and covert it to art. Give it a try!</p>
                </div>
                <div className='checklist'>
                    <div className='checklist-item'>
                        <i className="fa-regular fa-circle-check"></i> <span>Logos</span> 
                    </div>
                    <div className='checklist-item'>
                        <i className="fa-regular fa-circle-check"></i> <span>Graphics</span> 
                    </div>
                    <div className='checklist-item'>
                        <i className="fa-regular fa-circle-check"></i> <span>Photo-realistic scenes</span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About