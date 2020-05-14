import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: ${props => props.smooth ? 'smooth' : 'auto'};
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
`;

export { Container, Content, GlobalStyle };
