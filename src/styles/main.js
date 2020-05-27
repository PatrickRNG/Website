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
    height: calc(100vh - ${HEADER_MARGIN_MOBILE}px);
    padding: 0 20px;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #2b2b2b;
  width: 80%;
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.mobileS} and (max-width: 425px) {
    height: 100%;
    flex-direction: column;
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

export const HeadWrapper = styled.div`
  width: 50%;

  @media ${device.mobileS} and (max-width: 425px) {
    width: 30%;
  }

  & canvas {
    right: 0;
    position: absolute;
  }
`;

export const MainHeader = styled.div`
  width: 50%;

  @media ${device.mobileS} and (max-width: 425px) {
    width: 70%;
  }
`;
