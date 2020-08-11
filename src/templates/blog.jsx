import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import SEO from 'react-seo-component';

import Layout from '../components/Layout/Layout';
import TwitterCard from '../components/TwitterCard/TwitterCard';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Separator } from '../styles/main';
import { Title, Subtitle, Info, PhotoLegend, EndText } from './styles';

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
    socialMedia: { twitter },
  } = useSiteMetadata();
  const { frontmatter, body, fields } = data.mdx;
  const {
    title,
    date,
    cover,
    subtitle,
    coverCredit,
    coverWebsite,
  } = frontmatter;

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
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Info>
        {author} - {date}
      </Info>
      <Img fluid={cover.childImageSharp.fluid} />
      <PhotoLegend>{`Photo by ${coverCredit} on ${coverWebsite}`}</PhotoLegend>
      <MDXRenderer>{body}</MDXRenderer>
      <Separator width="100%" />
      <EndText>
        <b className="first">Thanks for reading!</b>Liked the content or
        just want to send me a message? Follow me on Twitter!
      </EndText>
      <TwitterCard
        name="Patrick Passarella"
        username={twitterUsername}
        url={twitter}
        image="https://pbs.twimg.com/profile_images/1252658694497714177/dRQCSTad_400x400.jpg"
      />
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
        coverCredit
        coverWebsite
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
