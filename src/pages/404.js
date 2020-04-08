import React from 'react';
import Layout from '../components/Layout';
import styles from '../css/error.module.css';
import { Link } from 'gatsby';
import Banner from '../components/Banner';
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops it's an dead end" info="lorem ipsum">
          <Link to="/" className="btn-white">
            Back to Home
          </Link>
        </Banner>
      </header>
    </Layout>
  );
}
