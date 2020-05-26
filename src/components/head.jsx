import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Head = ({title : pageTitle}) => {
  const { title } = useSiteMetadata();
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);
  return <Helmet title={`${pageTitle} | ${title}`} />;
}

export default Head;

