import React from 'react';
import { format } from 'date-fns';
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

  const formattedDate = format(new Date(`${date} 00:00:00`), 'do MMM, y');

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
        publishedDate={new Date(date)}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Info>
        {author} - {formattedDate}
      </Info>
      {cover && (
        <>
          <Img fluid={cover.childImageSharp.fluid} />
          <PhotoLegend>{`Photo by ${coverCredit} on ${coverWebsite}`}</PhotoLegend>
        </>
      )}
      <MDXRenderer>{body}</MDXRenderer>
      <Separator width="100%" />
      <EndText>
        <b className="first">Thanks for reading!</b>Enjoyed the content and want
        to read more? Subscribe to my newsletter!
      </EndText>

      <iframe
        src="https://embeds.beehiiv.com/a261739d-230a-40ce-a6ae-00cb9b16b219?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameborder="0"
        scrolling="no"
        style={{
          display: 'flex',
          margin: '0 auto',
          marginBottom: '32px',
          borderRadius: '0px !important',
          backgroundColor: 'transparent',
        }}
      ></iframe>
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
