import React from 'react';
import './Style_fauzi.css';


function OurStoryFauzi() {
  return (


    <div>
      <h1>Our Story</h1>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-50 carousel-image" src="image1.jpg" alt="First slide" />
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



      <div className='container'>

        <p>

          Welcome to Odin Coffee, where passion meets perfection in every cup. Our story begins with a dedication to uniting coffee lovers in the heart of Valhalla. Inspired by the strength of Norse mythology, we carefully select the finest beans globally, crafting a menu that blends tradition with innovation.


        </p>
        <br />

        <p>Step into our rustic Viking-inspired haven, where expert baristas forge flavors with precision. From robust dark roasts to serene light blends, there's a cup for every adventurer. We cherish sustainability, ensuring our journey benefits both the environment and the communities we touch.
        </p>

        <p>Join us at Odin Coffee, where each visit unveils a new chapter in the saga of flavor, community, and the enduring love for the perfect cup of coffee. Embrace the elixir of life with Odin's blessing.
        </p>


      </div>

    </div>

  );
}

export default OurStoryFauzi;




















