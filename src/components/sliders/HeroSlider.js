import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const HeroSlider = () => {
  return (
    <Splide options={ { rewind: true } } aria-label="React Splide Example">
    <SplideSlide>
      <img style={{width:"100%" , marginTop:"50px"}} src="https://trapthedeal.dousoftit.com/uploads/slider/Android%20Smart%20TV.jpg" alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img style={{width:"100%"  , marginTop:"50px"}} src="https://trapthedeal.dousoftit.com/uploads/slider/Small%20Appliances.jpg" alt="Image 2"/>
    </SplideSlide>
    <SplideSlide>
      <img style={{width:"100%"  ,  marginTop:"50px"}} src="https://trapthedeal.dousoftit.com/uploads/slider/Big%20Appliances.jpg" alt="Image 2"/>
    </SplideSlide>
  </Splide>
  );
}

export default HeroSlider;