import React from 'react'

const Howitworks = () => {
  return (
    <div className='howitworks d-flex align-items-none align-items-sm-center justify-content-center' id='howitworks'>
        <div className='main-box'>
            <div className='title text-center'>
                <h1>How It Works</h1>
            </div>
            <div className='about d-flex align-items-center justify-content-center'>
                <div className='text-box text-center'>
                    <p>Our image generating AI is designed to be user-friendly and accessible to everyone. No matter your level of experience or expertise, you can easily create amazing images with our tool. Simply enter your prompt and let our AI do the rest – it's as easy as that!</p>
                </div>
            </div>
            <div className='boxes d-flex align-items-center justify-content-between'>
                <div className='box1'>
                    <div className='number-box d-flex align-items-center'>
                        <div className='circle text-center'>
                             <p>1</p>
                        </div>
                    </div>
                    <div className='title d-flex align-items-center'>
                        <div className='text d-flex align-items-center justify-content-center'><p>Join the Discord</p></div>
                    </div>
                    <div className='paragraph'>
                        <p>Discord is a FREE, easy to join community platform with 300 million users. Our image generation app is currently only available here.</p>
                    </div>
                </div>

                <div className='box2'>
                    <div className='number-box d-flex align-items-center'>
                        <div className='circle text-center'>
                             <p>2</p>
                        </div>
                    </div>
                    <div className='title d-flex align-items-center'>
                        <div className='text d-flex align-items-center justify-content-center '><p>GO TO A "ROOKIE" CHANNEL</p></div>
                    </div>
                    <div className='paragraph'>
                        <p>After you get verified on Discord, go to a rookie channel and type a prompt starting with "/imagine: prompt" followed by text describing the image you want.</p>
                    </div>
                </div>

                <div className='box3'>
                    <div className='number-box d-flex align-items-center'>
                        <div className='circle text-center'>
                             <p>3</p>
                        </div>
                    </div>
                    <div className='title d-flex align-items-center'>
                        <div className='text d-flex align-items-center justify-content-center'><p>RECEIVE FOUR IMAGES</p></div>
                    </div>
                    <div className='paragraph'>
                        <p>In less than a minute you’ll receive four images to download or refine further. Use these any way you wish.</p>
                    </div>
                </div>
            </div>
            <div className='button-box d-flex align-items-center justify-content-center'>
                 <div className='button d-flex align-items-center justify-content-center'>
                     Learn More  <i className="fa-solid fa-circle-play"></i>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Howitworks