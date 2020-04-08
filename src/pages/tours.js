import React, { Component } from 'react';
import Layout from '../components/Layout';
import Button from '../examples/Button';

export default class tours extends Component {
  render() {
    return (
      <Layout>
        Hello From Tours
        <div>
          <Button big>First button</Button>
          <Button color="red">second button</Button>
        </div>
      </Layout>
    );
  }
}
