import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import restaurant from '../images/restaurant.png';
import restaurant2 from '../images/restaurant2.png';
import restaurant3 from '../images/restaurant3.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../styles/UserHome.css';



const UserHome = () => {

 return(
    <>
      <h1 className="titleUserHome">BIENVENIDO!!!</h1>
      <Carousel autoPlay interval={3000} infiniteLoop>
        <div>
          <img src={restaurant} alt="Imagen 1" />
        </div>
        <div>
          <img src={restaurant2}alt="Imagen 2" />
        </div>
        <div>
          <img src={restaurant3} alt="Imagen 3" />
        </div>
      </Carousel>
    </>
 );
}

export default UserHome;