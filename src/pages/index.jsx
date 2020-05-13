import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
  Flex,
  AboutSection,
  BlogSection,
  BlogWrapper,
  ContactSection,
  TwoWrapper,
  Subtitle,
  SocialTitle,
  CenterDivisor,
} from '../styles/main';

const IndexPage = () => {
  const {
    site: {
      siteMetadata: { socialMedia },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialMedia {
            linkedin
            twitter
            instagram
            github
            email
          }
        }
      }
    }
  `);

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
            <Subtitle style={{marginLeft: '10px'}} to="/blog">See all posts</Subtitle>
          </div>
        </BlogWrapper>
      </BlogSection>
      <ContactSection id="contact">
        <TwoWrapper>
          <div className="left">
            <H1>Contact</H1>
            <P>
              I am interested mostly in small/medium freelance opportunities.
              However, if you need anything else, feel free to contact me using
              the form below.
            </P>
          </div>
          <CenterDivisor />
          <div className="right">
            <H1>Social Media</H1>
            <Flex>
              <div>
                <SocialTitle>Github</SocialTitle>
                <Subtitle as="a" href={socialMedia.github} target="_blank">{socialMedia.github}</Subtitle>
              </div>
              <div>
                <SocialTitle>Linkedin</SocialTitle>
                <Subtitle as="a" href={`${socialMedia.linkedin}?locale=en_US`} target="_blank">{socialMedia.linkedin}</Subtitle>
              </div>
              <div>
                <SocialTitle>Twitter</SocialTitle>
                <Subtitle as="a" href={socialMedia.twitter} target="_blank">{socialMedia.twitter}</Subtitle>
              </div>
              <div>
                <SocialTitle>Instagram</SocialTitle>
                <Subtitle as="a" href={socialMedia.instagram} target="_blank">{socialMedia.instagram}</Subtitle>
              </div>
              <div>
                <SocialTitle>E-mail</SocialTitle>
                <Subtitle as="a" href={`mailto:${socialMedia.email}`} >{socialMedia.email}</Subtitle>
              </div>
            </Flex>
          </div>
        </TwoWrapper>
      </ContactSection>
    </Layout>
  );
};

export default IndexPage;
