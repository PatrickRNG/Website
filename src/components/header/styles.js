import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../../utils/devices';

const MenuHeader = styled.header`
  margin: 45px 55px 25px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileS} {
    margin: 45px 25px 25px 25px;
  }

  @media ${device.mobileS} and (max-width: 374px) {
    flex-direction: column;
  }
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  
  @media ${device.mobileS} and (max-width: 374px) {
    margin-bottom: 12px;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavItem = styled.li`
  font-size: 0.8rem;
  margin-right: 1.3rem;

  @media ${device.mobileS} {
    margin-right: 1rem;
    font-size: 0.9rem;
  }
  
  @media ${device.mobileS} and (max-width: 374px) {
    font-size: 1.25rem;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`;

export { MenuHeader, H2, NavList, NavItem, MenuLink };
