import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Head from '../components/head';
import Post from '../components/Post/Post';
import { H1, BlogWrapper, BlogSection } from '../styles/main';

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
          )).reverse()}
        </BlogWrapper>
      </BlogSection>
    </Layout>
  );
};

export default Blog;
