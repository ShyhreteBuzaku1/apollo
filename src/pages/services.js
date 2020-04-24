import React from 'react';
import Layout2 from '../components/Layout2';
import SimpleHero2 from '../components/SimpleHero2';
import { Link } from 'gatsby';
import Banner from '../components/Banner';
import Images from '../examples/Images';

const services = () => {
  return (
    <Layout2>
      <SimpleHero2>
        <Banner title="Our Services" info="lorem ipsum">
          <Link to="/" className="btn-white">
            Explore home
          </Link>
        </Banner>
      </SimpleHero2>
      <Images />
    </Layout2>
  );
};

export default services;
