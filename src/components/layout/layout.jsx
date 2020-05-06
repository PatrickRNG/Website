import React from 'react';

import Header from '../header/header';
import Footer from '../footer';
import { Container, Content } from './styles';

const Layout = ({ children, contentStyle, ...rest }) => {
  return (
    <Container {...rest}>
      <Header />
      <Content style={contentStyle}>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
