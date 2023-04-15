import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact' id='contact'>

        <div className='main-box'>

             <div className='title'>
                <h2>Stay Connected</h2>
             </div>

             <div className='subtitle'>
                <p>Sign up for our newsletter to keep up to date on the latest developments in BlueWillow and receive tips and tutorials for creating the best AI images</p>
             </div>

             <div className='form'>

                 <div className='form-box'>
                     <div className='input-box'>
                         <div className='box1'>
                             <div className='input-box1'>
                                 <input type="text" placeholder='First Name'/>
                             </div>
                         </div>

                         <div className='box2'>
                                <div className='input-box2'>
                                   <input type="text" placeholder='Last Name'/>
                                </div>
                         </div>
                     </div>

                     <div className='email-box'>
                         <div className='input-box3'>
                             <input type="email" placeholder='Email Adress'/>
                         </div>
                     </div>

                     <div className='button-box'>
                             <button type='submit'>Sign up</button>
                     </div>
                 </div>

             </div>
        </div>

    </div>
  )
}

export default ContactUs