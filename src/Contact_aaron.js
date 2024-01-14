import React, { useState, useEffect } from 'react';
import './Header_king.css'
import './style_aaron.css';

import 'bootstrap/dist/js/bootstrap.min.js';


function Contact_aaron() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here
    // You can use the values from the state variables (name, email, message) to send the feedback
  };
  return (
    <>

      <div class="mt-3 p-3 mb-2 backgroundcolor text-white text-center ">
        <h5>
        Get in Touch with Odin Coffee Shop!
        </h5>
      </div>
      <div class="container">
        <div class="d-flex flex-row  ">
          <div class="pl-5 pt-3 ">

            <div class="card " style={{ height: '300px' }}>

              <div class="card-body cardbg-color">
                <h4 class="card-title cardheader-color">Visit Us :</h4>
                <p class="card-text">
                  If you happen to be in the neighborhood, we'd love to meet you in person!
                </p>

                <p>Our physical address is : </p>

                <p>Odin Coffee Shop, Street of Valhalla, Valhalla</p>
                <p>We're open Daily from 9am to 9pm.</p>
                <button variant="primary" class="btn cardbtn-color float-right" >
                  Find us in Map
                </button>
              </div>

            </div>


          </div>




          <div class=" pl-5 pt-3 "  >

            <div class="card" style={{ height: '300px' }} >

              <div class="card-body cardbg-color ">
                <h4 class="card-title cardheader-color">Contact Us :</h4>
                <p class="card-text">
                  For more immediate assistance,</p>
                <p> you can give us a call at [080-333333] </p>
                <p>or our WhatsApp line [010-9999999]</p>
                <p>Our team is available during business hours to answer your queries.</p>
                <button type="button" class="btn cardbtn-color float-right">
                  Chat with via Whatsapp
                </button>

              </div>
            </div>


          </div>






        </div>

      </div>

      <div class="container cardbg-color " style={{ width : '2500px' }}>
   
        <span class="d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit}  class="align-items-center">
            <div class="form-group row  justify-content-center ">
              <label htmlFor="name">Name:</label>
              <input  class=" ml-3 pt-3 " type="text" id="name" value={name} onChange={handleNameChange} />
            </div>

            <div class="form-group row justify-content-center">
              <label htmlFor="email">Email:</label>
              <input  class=" ml-3 pt-3 " type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>

            <div class="form-group row justify-content-center">
              <label htmlFor="message">Message:</label>
              <textarea  class=" ml-3 pt-3 "  id="message" value={message} onChange={handleMessageChange} />
            </div>
            <div class="form-group row justify-content-center">
            <button type="submit" class="btn cardbtn-color ml-3 float-right">Submit</button>
            <button type="submit" class="btn cardbtn-color ml-3 float-right">Reset</button>
            </div>
          </form>

        </span>
      </div>

    </>
  )
}

export default Contact_aaron