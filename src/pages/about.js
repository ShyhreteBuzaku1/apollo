import React, { Component } from 'react';
import Layout2 from '../components/Layout2';
import SimpleHero2 from '../components/SimpleHero2';
import { Link } from 'gatsby';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Header from '../examples/Header';
import Navbar from '../components/Navbar';
// import RegularHeader from '../examples/RegularHeader';
export default class about extends Component {
  render() {
    return (
      <Layout2>
        <SimpleHero2>
          <Banner title="about us" info="lorem ipsum">
            <Link to="/about" className="btn-white">
              Explore tours
            </Link>
          </Banner>
        </SimpleHero2>
        {/* <RegularHeader /> */}
        <About />
      </Layout2>
    );
  }
}
