import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from 'react-seo-component';

import Layout from '../components/layout/layout';
import Head from '../components/head';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 1.8rem;
`;

const Subtitle = styled.p`
  margin: 6px 0;
  color: #dadada;
  font-size: 1.1rem
`;

const Info = styled.p`
  margin-bottom: 1.8rem;
  color: #888;
  font-size: 0.9rem;
`;

const PhotoLegend = styled.p`
  margin-bottom: 1.8rem;
  margin-top: 0.6rem;
  font-size: 0.8rem;
  color: #888;
  text-align: center;
`;

const Blog = ({ data, pageContext }) => {
  // const { previous, next } = pageContext;
  const {
    title: siteTitle,
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
        titleTemplate={siteTitle}
        description={subtitle}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
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
      <Title>{title}</Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
      <Info>
        {author} - {date}
      </Info>
      <Img fluid={cover.childImageSharp.fluid} />
      <PhotoLegend>Photo by NeONBRAND on Unsplash</PhotoLegend>
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
          childImageSharp {
            fluid(maxWidth: 1032) {
              ...GatsbyImageSharpFluid
            }
          }
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
