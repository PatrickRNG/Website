import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout/layout';
import Head from '../components/head';

// This $slug comes from the context in the gatsby-node
export const query = graphql`
  query($slug: String!) {
    mdx (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`;

const Blog = ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  return (
    <Layout contentStyle={{maxWidth: '1032px', padding: '0 1.5rem'}}>
      <Head title={data.mdx.frontmatter.title} />
      <h1 style={{fontSize: '2.5rem', margin: '1.8rem 0'}}>{data.mdx.frontmatter.title}</h1>
      <p>{<props className="data mdx frontmatter date"></props>}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default Blog;
