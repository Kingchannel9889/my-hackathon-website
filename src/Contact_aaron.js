import React, { useState } from 'react';
import './Header_king.css'
import './style_aaron.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Contact_aaron() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <button variant="primary" class="btn cardbtn-color float-right" onClick={handleShow}>
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
                <p> you can give us a call:  at 080-333333 </p>
                <p>or our WhatsApp line:  010-9999999</p>
                <p>Our team is available during business hours to answer your queries.</p>
                <button type="button" class="btn cardbtn-color float-right">
                  Chat with via Whatsapp
                </button>

              </div>
            </div>


          </div>






        </div>

      </div>

      <div class="container formbg-color " style={{ width: '2300px' }}>

        <span class="d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit} class="align-items-center">
            <div class="form-group row  justify-content-center ">
              <label htmlFor="name">Name:</label>
              <input class=" ml-3 pt-3 " type="text" id="name" value={name} onChange={handleNameChange} />
            </div>

            <div class="form-group row justify-content-center">
              <label htmlFor="email">Email:</label>
              <input class=" ml-3 pt-3 " type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>

            <div class="form-group row justify-content-center">
              <label htmlFor="message">Message:</label>
              <textarea class=" ml-3 pt-3 " id="message" value={message} onChange={handleMessageChange} />
            </div>
            <div class="form-group row justify-content-center">
              <button type="submit" class="btn cardbtn-color ml-3 float-right">Submit</button>
              <button type="submit" class="btn cardbtn-color ml-3 float-right">Reset</button>
            </div>
          </form>

        </span>
      </div>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Google Map</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.971749651068!2d-122.08257948582698!3d37.422104530462016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb749b5f0cc1f%3A0x1fe0eaf5b9932a6a!2sCodeium!5e0!3m2!1sen!2sus!4v1629966430126!5m2!1sen!2sus"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          >
          </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>



    </>
  )
}

export default Contact_aaron