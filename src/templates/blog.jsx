import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from 'react-seo-component';

import Layout from '../components/layout/layout';
import Head from '../components/head';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Blog = ({ data, pageContext }) => {
  // const { previous, next } = pageContext;
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    author,
 } = useSiteMetadata();
 const { frontmatter, body, fields } = data.mdx;
 const { title, date, cover, subtitle } = frontmatter;

  return (
    <Layout contentStyle={{ maxWidth: '1032px', padding: '0 1.5rem' }}>
      <SEO
        title={title}
        description={subtitle}
        image={cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`}
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={author}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <Head title={title} />
      <h1 style={{ fontSize: '2.5rem', marginTop: '1.8rem' }}>
        {title}
      </h1>
  <p style={{margin: '6px 0', color: '#dadada', fontSize: '1.1rem'}}>{subtitle}</p>
  <p style={{marginBottom: '1.8rem', color: '#888', fontSize: '0.9rem'}}>{author} - {date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default Blog;

// This $slug comes from the context in the gatsby-node
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        subtitle
        cover {
          publicURL
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
