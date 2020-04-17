import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getSiteData = graphql`
  query ApolloQuery {
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

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData);

  // console.log(siteMetadata);
  return (
    <div>
      <h1>title: {siteMetadata.title}</h1>
      <h1>author:{siteMetadata.data.name}</h1>
    </div>
  );
};

export default Header;
