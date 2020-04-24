import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';

import Services from '../components/Home/Services';
export default () => (
  <Layout>
    <SimpleHero>
      <Banner title="SEARCH YOUR DOMAIN" info="lorem ipsum">
        <Link to="/about" className="btn-white">
          Explore tours
        </Link>
      </Banner>
    </SimpleHero>

    <Services />
  </Layout>
);
