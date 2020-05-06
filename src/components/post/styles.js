import styled from 'styled-components';

const PostWrapper = styled.div`
  margin-bottom: 35px;
  padding: 10px;
  transition: 150ms;

  &:hover {
    background-color: #252525;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  opacity: 0.55;
  margin-top: 7px;
  margin-bottom: 18px;
`;

const Author = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;

const Date = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  opacity: 0.55;
  margin-left: 10px;
`;

export { Title, Subtitle, Author, Date, PostWrapper };
