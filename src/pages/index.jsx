import React from 'react';

import '../styles/index.scss';
import Layout from '../components/layout/layout';
import Head from '../components/head';
import Post from '../components/post/post';
import {
  Roles,
  Section,
  H1,
  BoldHeader,
  P,
  AboutSection,
  BlogSection,
  BlogWrapper,
  Divisor
} from '../styles/main';

const IndexPage = () => {
  return (
    <Layout>
      <Section id="Home" style={{ height: 'calc(100vh - 200px)' }}>
        <Head title="Home" />
        <BoldHeader>
          Hi,
          <br />
          I’m Patrick,
          <br />
          web developer.
        </BoldHeader>
        <Roles>Front End / Back End / Fullstack / UI &amp; UX</Roles>
      </Section>
      <AboutSection id="about">
        <H1>About me</H1>
        <P>
          I’ve always been in the technology side since I was a kid, studying
          Pretty much anything related to that in the course of my life and
          career, like game-development, 3D modeling, animation, music, motion
          design and UX/UI, I consider myself as a fast learner, picking up new
          skills with relative ease. Today my focus is mostly web related.
        </P>
        <P>
          I’m always in hunger for learning and I consider knowledge the most
          important thing in my life, not only counting the technical side, but
          as a person, always growing with empathy and emotion.
        </P>
        <P>
          Inspiring others is one of my natural talents, as I’m easily inspired
          and I try my best to keep learning with enthusiasm. My energy takes me
          to pursuit many other interests, hobbies and areas of study, like
          investments, philosophy, math, fitness and cooking.
        </P>
        <P>
          Currently I work in a full-time job and interested in
          entrepreneurship, but also looking for some freelancing in my free
          time.
        </P>
      </AboutSection>
      <BlogSection id="blog">
        <H1>Blog</H1>
        <BlogWrapper>
          <div>
            <Post
              title="Node.js internals and it’s importance"
              subtitle="Why learn Node.js internals?"
              author="Patrick Passarella"
              date="March 13th, 2020"
            />
            <Post
              title="Working with Dependency Injection in Node.js"
              subtitle="Implementing Dependency Injection with Awillix, is it worth it?"
              author="Patrick Passarella"
              date="March 13th, 2020"
            />
            <Post
              title="Using Vault instead of .env"
              subtitle="Is .env absolete?"
              author="Patrick Passarella"
              date="March 13th, 2020"
            />
          </div>
          <Divisor />
          <div>
            <Post
              title="Creating a server in GraphQL with Nest.js"
              subtitle="Is graphQL good for backend with Nest.js?"
              author="Patrick Passarella"
              date="March 13th, 2020"
            />
            <Post
              title="Working with Gatsby.js"
              subtitle="Creating a dynamic blog with Gatsby.js"
              author="Patrick Passarella"
              date="March 13th, 2020"
            />
          </div>
        </BlogWrapper>
      </BlogSection>
    </Layout>
  );
};

export default IndexPage;
