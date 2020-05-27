import styled from 'styled-components';
import { Link } from 'gatsby';
import { device } from '../../utils/devices';

const MenuHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileS} {
    margin: 45px 25px 25px 25px;
  }

  @media ${device.tablet} {
    margin: 45px 55px 25px 55px;
  }

  @media ${device.mobileS} and (max-width: 375px) {
    flex-direction: column;
  }
`;

const H2 = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;

  @media ${device.mobileS} {
    margin-top: 1rem;
  }

  @media ${device.mobileL} {
    margin-top: 0;
  }
`;

const NavItem = styled.li`
  font-size: 0.9rem;
  &:not(:last-child) {
    @media ${device.mobileS} and (max-width: 410px), (min-width: 768px) {
      margin-right: 2.3rem;
    }
  }

  @media ${device.mobileL} and (max-width: 768px) {
    margin-right: 1rem;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #9b9b9b;
  transition: 0.2s;

  &:hover {
    color: #dadada;
  }
`;

export { MenuHeader, H2, NavList, NavItem, MenuLink };
