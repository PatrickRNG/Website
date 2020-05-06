import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { H2, MenuHeader, MenuLink, NavItem, NavList } from './styles';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menus
        }
      }
    }
  `);

  return (
    <MenuHeader>
      <H2>Patrick Passarella</H2>
      <nav>
        <NavList>
          {data.site.siteMetadata.menus.map((menu, index) => (
            <NavItem key={index}>
              <MenuLink href={menu === 'Home' ? '/' : `#${menu.toLowerCase()}`}>
                {menu}
              </MenuLink>
            </NavItem>
          ))}
        </NavList>
      </nav>
    </MenuHeader>
  );
};

export default Header;
