import React from 'react';
import './Style_joshua.css';
import Footer from './Footer_joshua';

function Homepage_joshua() {
    return (
        <div className='home-page'>
            <div id='top' className="text-white text-center">
                <img id="pattern" className="d-block" src="vikingpat.png" />
                <img id="logo" className="" src="odin.png" />
                <img id="shield1" className="" src="vikingshield.png" />
                <img id="shield2" className="" src="vikingshield.png" />
                <h1 className="display-4">Odin Coffee</h1>
                <p id="slogan" className="lead">The All-Father Coffee Experience awaits you.</p>
                <img id="pattern" className="d-block" src="vikingpat.png" />
            </div>

            <section id='pic1' className='container-fluid text-white text-center'>
                <div className="background-image">
                    <h1 className="display-4">Energy and Strength of Gods!</h1>
                    <p>Feel the Energy and Strength from Asgard.</p>
                    <a className="btn btn-primary" href="./Menu_king" role="button">Check the Menu</a>
                </div>
            </section>

            <section id="carousel-container" className='container-fluid'>
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="coffee1.gif" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 id='desch'>Multiple Coffee Choices</h5>
                                <p className='desc'>A Number of Coffee flavours to choose from!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="coffee3.gif" alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 id='desch'>Made from the Freshest Beans</h5>
                                <p className='desc'>Straight from our organic coffee farms to the farm and into your hearts.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="coffee2.gif" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 id='desch'>Share with your Love Ones</h5>
                                <p className='desc'>Made with love to be shared with your loved.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        </div>
    
    );
}

export default Homepage_joshua;

