import React from 'react'
import { Link } from 'gatsby';
import Layout from "../components/Layout"
const blog = () => {
  return (
    <Layout>
      Hello from Blog <Link to="/">Back home</Link>
    </Layout>
  )
}

export default blog