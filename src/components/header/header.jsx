import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
      <H2 style={{fontWeight: '700'}}><Link style={{textDecoration: 'none '}} to="/">Patrick Passarella</Link></H2>
      <nav>
        <NavList>
          {data.site.siteMetadata.menus.map((menu, index) => (
            <NavItem key={index}>
              <MenuLink to={menu === 'Home' ? '/' : `/#${menu.toLowerCase()}`}>
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
