import styled from 'styled-components';

export const Card = styled.a`
  border: 1px solid #353535;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:  0 auto 32px auto;
  max-width: 600px;
  transition: .15s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  & .wrapper {
    padding: 0 8px 0px 16px;
  }

  & .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #dadada;
  }

  & .link {
    text-decoration: none;
    font-size: 0.75rem;
    color: #9a9a9a;
  }

  & .photo {
    width: 120px;
    opacity: .8;
  }
`;
