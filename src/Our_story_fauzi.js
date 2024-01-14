 import React from 'react';
 import './Style_fauzi.css';


 function OurStoryFauzi() {
   return (
     <div>
       <h1>Interactivity</h1>

       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
         <div className="carousel-inner">
           <div className="carousel-item active">
             <img className="d-block w-50 carousel-image" src="image1.jpg"  alt="First slide" />
           </div>
           <div className="carousel-item">
             <img className="d-block w-50 carousel-image" src="image2.jpg" alt="Second slide" />
           </div>
           <div className="carousel-item">
             <img className="d-block w-50 carousel-image" src="image3.jpg" alt="Third slide" />
           </div>
         </div>
         <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
           <span className="carousel-control-next-icon" aria-hidden="true"></span>
           <span className="sr-only">Next</span>
        </a>
       </div>

       <h1>Description</h1>
    </div>
  );
 }

 export default OurStoryFauzi;




















