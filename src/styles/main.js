import styled from 'styled-components';
import { device } from '../utils/devices';

const Roles = styled.p`
  font-size: 0.75rem;
  color: #8d8d8d;
  font-weight: bold;
  margin-top: 20px;
`;

const Section = styled.section`
  padding: 0 145px;
  height: calc(100vh - 110px);
  border-bottom: 2px solid #2b2b2b;

  @media ${device.tablet} and (max-width: 1023px) {
    padding: 0 45px;
  }

  @media ${device.mobileS} and (max-width: 767px) {
    padding: 0 20px;
  }
`;

const H1 = styled.h1`
  font-size: 3.75rem;
  font-weight: bold;
  margin-top: 110px;
  margin-bottom: 42px;

  @media ${device.mobileS} and (max-width: 409px) {
    font-size: 2.85rem;
  }
`;

const BoldHeader = styled(H1)`
  font-family: 'Open Sans', 'Lato', sans-serif;
  margin-bottom: 22px;
`;

const P = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1.35rem;
  max-width: 633px;
  line-height: 120%;
`;

const AboutSection = styled(Section)`
  @media ${device.mobileS} and (max-width: 425px) {
    height: 100%;
  }
`;

const BlogSection = styled(Section)`
  position: relative;

  @media ${device.mobileS} and (max-width: 1024px) {
    height: 100%;
    padding-bottom: 60px;
  }
`;

const BlogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.mobileS} and (max-width: 1023px) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Divisor = styled.div`
  width: 1.5px;
  background-color: #2b2b2b;
  margin: 0 30px;
  height: 70%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -62%);

  @media ${device.mobileS} and (max-width: 1023px) {
    display: none;
  }
`;

const StaticDivisor = styled.div`
  width: 1.5px;
  background-color: #2b2b2b;
  margin: 0 30px;

  @media ${device.mobileS} and (max-width: 1023px) {
    display: none;
  }
`;

export {
  Roles,
  Section,
  H1,
  BoldHeader,
  P,
  AboutSection,
  BlogSection,
  BlogWrapper,
  Divisor,
  StaticDivisor
};
