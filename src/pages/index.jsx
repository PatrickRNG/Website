import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import SEO from 'react-seo-component';
import { motion } from 'framer-motion/dist/framer-motion';

import Layout from '../components/Layout/Layout';
import Post from '../components/Post/Post';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { slideUp } from '../utils/animation';

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
  MainHeader,
  MainSection,
  ImageCover,
  CTAHeader,
  SubHeader,
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

  const maxLaptop = useMediaQuery({ query: '(max-width: 1024px)' });

  const {
    title,
    description,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  const AnimatedSection = ({ children, delay = 0.2 }) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    );
  };

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
      <ImageCover />
      <AnimatedSection>
        <MainSection>
          <MainHeader>
            <motion.div variants={slideUp}>
              <BoldHeader>
                Hi,
                <br />
                I’m Patrick,
                <br />
                Software Enginner.
              </BoldHeader>
            </motion.div>
            <motion.div variants={slideUp}>
              <Roles>Fullstack / Tech Lead / UI &amp; UX</Roles>
              <CTAHeader>
                <SubHeader>Sign-up to my Newsletter!</SubHeader>
                <P style={{ marginBottom: '32px' }}>
                  To receive valuable content from an experienced developer
                </P>
                <iframe
                  src="https://embeds.beehiiv.com/a261739d-230a-40ce-a6ae-00cb9b16b219?slim=true"
                  data-test-id="beehiiv-embed"
                  height="52"
                  frameborder="0"
                  scrolling="no"
                  style={{
                    margin: 0,
                    borderRadius: '0px !important',
                    backgroundColor: 'transparent',
                  }}
                />
              </CTAHeader>
            </motion.div>
          </MainHeader>
        </MainSection>
      </AnimatedSection>

      <Separator id="about" />
      <AnimatedSection delay={0.3}>
        <AboutSection>
          <H1 as="h2">About me</H1>
          <P>
            I'm Patrick Passarella, a full-stack software engineer based in
            Brazil, but living in Europe.
          </P>
          <P>
            I’ve always been on the technology side since I was a kid, studying
            pretty much anything related to that in the course of my life and
            career, such as game development, 3D modeling, animation, and UI/UX.
            I consider myself a fast learner and heavily motivated, picking up
            new skills with ease. Today my focus is mentorship, content
            creation, and building solutions.
          </P>
          <P>
            One of my many goals is to never stop learning, and always be
            outside my comfort zone. I try to improve myself not only on the
            technical side, but as a person too.
          </P>
          <P>
            Inspiring and helping others is one of my talents, as it's something
            I really love and aspire to do. I also have many other interests and
            hobbies, such as video games, economics, fitness, and cooking.
          </P>
          <P>
            I'm always looking for new challenges and aspirations, feel free to
            reach out to me at anytime.
          </P>
        </AboutSection>
      </AnimatedSection>
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
      <AnimatedSection>
        <ContactSection>
          <TwoWrapper>
            <div className="left">
              <H1>Newsletter</H1>
              <P style={{ marginBottom: '64px' }}>
                <b>I have a Newsletter!</b> Where I share more streamlined
                content on tech, career advice, and personal growth. Subscribe
                to receive my latest thoughts and insights ☕.
              </P>
              <iframe
                src="https://embeds.beehiiv.com/a261739d-230a-40ce-a6ae-00cb9b16b219?slim=true"
                data-test-id="beehiiv-embed"
                height="52"
                frameborder="0"
                scrolling="no"
                style={{
                  margin: 0,
                  borderRadius: '0px !important',
                  backgroundColor: 'transparent',
                }}
              />
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
      </AnimatedSection>
    </Layout>
  );
};

export default IndexPage;
