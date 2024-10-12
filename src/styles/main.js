import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../utils/devices';

const HEADER_MARGIN = 110;
const HEADER_MARGIN_MOBILE = 50;

export const Roles = styled.p`
  font-size: 0.75rem;
  color: #8d8d8d;
  font-weight: bold;
  margin-top: 20px;
`;

export const Section = styled.section`
  position: relative;
  padding: 0 145px;
  height: calc(100vh - ${HEADER_MARGIN}px);

  @media ${device.tablet} and (max-width: 1024px) {
    padding: 0 45px;
  }

  @media ${device.mobileS} and (max-width: 767px) {
    padding: 0 20px;
  }

  @media ${device.mobileS} and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const MainSection = styled(Section)`
  display: flex;
  justify-content: space-between;

  @media ${device.mobileS} and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-image: linear-gradient(
      -90deg,
      rgba(25, 25, 25, 0.95),
      rgba(25, 25, 25, 1)
    ),
    url('./cover.jpg');
  background-size: cover;
  background-position: center;
`;

export const MainHeader = styled.div`
  width: 50%;

  @media ${device.mobileS} and (max-width: 425px) {
    width: 100%;
  }
`;

export const CTAHeader = styled.div`
  margin-top: 64px;
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #2b2b2b;
  width: ${({ width }) => width || '80%'};
  margin: 0 auto;
`;

export const H1 = styled.h1`
  font-size: 3.4rem;
  font-weight: bold;
  margin-top: ${HEADER_MARGIN}px;
  margin-bottom: 42px;

  @media ${device.mobileS} and (max-width: 768px) {
    margin-top: ${HEADER_MARGIN_MOBILE}px;
    font-size: 2.85rem;
  }
`;

export const SubHeader = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Subtitle = styled(Link)`
  font-size: 0.9rem;
  font-weight: bold;
  opacity: 0.55;
  text-decoration: none;
  transition: 0.15s;
  padding-bottom: 1px;
  border-bottom: 1px solid #8d8d8d;

  &:hover {
    opacity: 0.8;
  }
`;

export const BoldHeader = styled(H1)`
  font-family: 'Open Sans', 'Lato', sans-serif;
  margin-bottom: 22px;
`;

export const P = styled.p`
  font-size: 0.88rem;
  margin-bottom: 1.35rem;
  max-width: 633px;
  line-height: 130%;
`;

export const AboutSection = styled(Section)`
  @media ${device.mobileS} and (max-width: 425px) {
    height: 100%;
  }
`;

export const BlogSection = styled(Section)`
  position: relative;

  @media ${device.mobileS} and (max-width: 1024px) {
    height: 100%;
    padding-bottom: 60px;
  }
`;

export const ContactSection = styled(Section)`
  height: 100vh;

  @media ${device.mobileS} and (max-width: 1024px) {
    height: 100%;
    padding: 0;
  }
`;

export const TwoWrapper = styled.div`
  display: flex;
  height: 100%;

  @media ${device.mobileS} and (max-width: 1024px) {
    flex-direction: column;
  }

  & .left,
  & .right {
    @media ${device.mobileS} and (max-width: 1024px) {
      height: 100vh;
      padding: 0 20px;
    }
  }

  & .left {
    width: 100%;
  }

  & .right {
    width: 100%;

    & div {
      margin-bottom: 30px;
    }
  }
`;

export const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media ${device.mobileS} and (max-width: 425px) {
    height: 100%;
    display: block;
    min-height: 350px;
  }
`;

export const CenterDivisor = styled.div`
  width: 1.5px;
  background-color: #2b2b2b;
  margin: auto 80px;
  height: 75vh;

  @media ${device.mobileS} and (max-width: 1024px) {
    display: none;
  }
`;

export const SocialTitle = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Flex = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;

    & > div:nth-child(odd) {
      width: 50%;
    }
  }
`;
