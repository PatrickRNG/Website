import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Head from '../components/head';
import Post from '../components/post/post';
import { H1, BlogWrapper, StaticDivisor, BlogSection } from '../styles/main';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              author
              subtitle
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout contentStyle={{ maxWidth: '1032px' }}>
      <Head title="Blog" />
      <BlogSection>
        <H1>Blog</H1>
        <BlogWrapper>
          {data.allMdx.edges.map((edge, index) => (
            <Post
              key={index}
              title={edge.node.frontmatter.title}
              subtitle={edge.node.frontmatter.subtitle}
              author={edge.node.frontmatter.author}
              date={edge.node.frontmatter.date}
              link={`/blog/${edge.node.fields.slug}`}
            />
          ))}
        </BlogWrapper>
      </BlogSection>
    </Layout>
  );
};

export default Blog;
