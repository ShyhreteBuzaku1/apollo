import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`;

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={(data) => {
        console.log('Helloo: ' + data);

        return (
          <div>
            <h1> Regular Hello people {data.site.siteMetadata.title}</h1>
          </div>
        );
      }}
    />
  );
};

export default RegularHeader;
