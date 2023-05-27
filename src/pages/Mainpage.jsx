import React from 'react';
import Destination from '../components/Destination/Destination';
import Offers from '../components/Offers/Offers';
import Footer from '../components/Footer/Footer';
import Experience from '../components/Experience/Experience';
import Carousel from '../components/Carousel/Carousel';
import TopNavbar from '../components/Navigation/TopNavbar';
import BottomNavbar from '../components/Navigation/BottomNavbar';


function Mainpage() {

  return (
    <div>
      <TopNavbar />
      <BottomNavbar />
      <Carousel />
      <Destination />
      <Experience />
      <Offers />
      <Footer />
    </div>
  )
}

export default Mainpage