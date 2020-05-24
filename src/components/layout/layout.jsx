import React from 'react';
import Header from '../header/header';
import { Container, Content, GlobalStyle } from './styles';

const Layout = ({ children, contentStyle, location, ...rest }) => {
  return (
    <Container {...rest}>
      <GlobalStyle smooth={location && location.pathname === '/'} />
      <Header />
      <Content style={contentStyle}>{children}</Content>
    </Container>
  );
};

export default Layout;
