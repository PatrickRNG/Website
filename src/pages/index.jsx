import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import SEO from 'react-seo-component';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import Layout from '../components/Layout/Layout';
import Post from '../components/Post/Post';
import Object3D from '../components/object3D/object3D';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

import {
  Roles,
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
  Separator,
  HeadWrapper,
  MainHeader,
  MainSection,
  Newsletter,
} from '../styles/main';

const IndexPage = ({ location }) => {
  const {
    site: {
      siteMetadata: { socialMedia },
    },
    allMdx: { edges },
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

  const [email, setEmail] = useState('');
  const [newsletterText, setNewsletterText] = useState('');

  const maxLaptop = useMediaQuery({ query: '(max-width: 1024px)' });
  const maxTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const maxMobileL = useMediaQuery({ query: '(max-width: 425px)' });

  const render3DHead = () => {
    if (maxMobileL) return <Object3D fov={30} />;
    if (maxTablet) return <Object3D fov={25} />;
    return <Object3D fov={34} />;
  };

  const handleNewsletter = async (e) => {
    e.preventDefault();
    const { result, msg } = await addToMailchimp(email);
    if (result === 'error') {
      if (msg.includes('is already subscribed')) {
        return setNewsletterText("You're already subscribed!");
      }
      return setNewsletterText('Some error ocurred, unable to subscribe');
    }

    setNewsletterText('Thank you for subscribing! Have a great day');
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const {
    title,
    description,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  return (
    <Layout location={location}>
      <SEO
        title={'Home'}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        titleTemplate={title}
      />
      <MainSection>
        <MainHeader>
          <BoldHeader>
            Hi,
            <br />
            I’m Patrick,
            <br />
            web developer.
          </BoldHeader>
          <Roles>Front End / Back End / Fullstack / UI &amp; UX</Roles>
        </MainHeader>
        <HeadWrapper>{render3DHead()}</HeadWrapper>
      </MainSection>
      <Separator id="about" />
      <AboutSection>
        <H1 as="h2">About me</H1>
        <P>
          I'm Patrick Passarella, a full-stack web developer based in Brazil.
        </P>
        <P>
          I’ve always been on the technology side since I was a kid, studying
          pretty much anything related to that in the course of my life and
          career, like game development, 3D modeling, animation, music, motion
          design, and UI/UX, I consider myself as a fast learner, picking up new
          skills with relative ease. Today my focus is mostly web-related.
        </P>
        <P>
          I’m always learning and I consider knowledge the most important thing
          in my life, not only counting the technical side but as a person,
          always growing with empathy and emotion as best as I can.
        </P>
        <P>
          Inspiring others is one of my talents, as I’m easily inspired and I
          try my best to keep learning with enthusiasm. My energy also takes me
          to pursuit many other interests, hobbies, and areas of study, such as
          economics, philosophy, math, fitness, and cooking.
        </P>
        <P>
          Currently, I work in a full-time job and am interested in
          entrepreneurship, but also looking for some freelancing.
        </P>
      </AboutSection>
      <Separator id="blog" />
      <BlogSection>
        <H1 as="h2">Blog</H1>
        <P style={{ marginBottom: '64px' }}>
          Here I write about things that I like or know, such as web
          development, career, life and self-improvement.
        </P>
        <BlogWrapper>
          {edges.slice(0, 4).map((edge) => (
            <Post
              key={edge.node.fields.slug}
              title={edge.node.frontmatter.title}
              subtitle={edge.node.frontmatter.subtitle}
              author={edge.node.frontmatter.author}
              date={edge.node.frontmatter.date}
              link={`/blog/${edge.node.fields.slug}`}
            />
          ))}
        </BlogWrapper>
        <Subtitle to="/blog" style={{ marginLeft: '10px', marginTop: '10px' }}>
          See all posts
        </Subtitle>
      </BlogSection>
      <Separator id="contact" />
      <ContactSection>
        <TwoWrapper>
          <div className="left">
            <H1>Newsletter</H1>
            <P>
              Sign up to know when I post something new on my blog! Also for
              more content and updates.
            </P>
            <Newsletter onSubmit={handleNewsletter}>
              <input
                type="email"
                onChange={handleChangeEmail}
                className="newsletter-input"
                placeholder="Your E-mail here!"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </Newsletter>
            <P style={{ marginTop: '16px' }}>{newsletterText}</P>
          </div>
          <CenterDivisor />
          {maxLaptop && <Separator id="social" />}
          <div className="right">
            <H1 as="h2">Social Media</H1>
            <Flex>
              <div>
                <SocialTitle>Twitter</SocialTitle>
                <Subtitle as="a" href={socialMedia.twitter} target="_blank">
                  {socialMedia.twitter}
                </Subtitle>
              </div>
              <div>
                <SocialTitle>Linkedin</SocialTitle>
                <Subtitle
                  as="a"
                  href={`${socialMedia.linkedin}?locale=en_US`}
                  target="_blank"
                >
                  {socialMedia.linkedin}
                </Subtitle>
              </div>
              <div>
                <SocialTitle>Github</SocialTitle>
                <Subtitle as="a" href={socialMedia.github} target="_blank">
                  {socialMedia.github}
                </Subtitle>
              </div>
              <div>
                <SocialTitle>Instagram</SocialTitle>
                <Subtitle as="a" href={socialMedia.instagram} target="_blank">
                  {socialMedia.instagram}
                </Subtitle>
              </div>
              <div>
                <SocialTitle>E-mail</SocialTitle>
                <Subtitle as="a" href={`mailto:${socialMedia.email}`}>
                  {socialMedia.email}
                </Subtitle>
              </div>
            </Flex>
          </div>
        </TwoWrapper>
      </ContactSection>
    </Layout>
  );
};

export default IndexPage;
