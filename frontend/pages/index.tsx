import React from 'react';
import {HeroBanner, Product, FooterBanner} from '../components';

const Home = () => (
    <>
      <HeroBanner />

      <div>
        This is where i will place the advert banner
      </div>

      <div>
        {['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'].map((product) => product)}
      </div>
      
      <FooterBanner />
    </>
  )


export default Home