import React from 'react';
import { Link } from 'gatsby';
import { Title, Subtitle, Author, Date, PostWrapper } from './styles';

const Post = ({ title, subtitle, author, date, link, ...rest }) => {
  return (
    <PostWrapper {...rest}>
      <Link style={{ textDecoration: 'none' }} to={link}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Author>
          {author}
          <Date>{date}</Date>
        </Author>
      </Link>
    </PostWrapper>
  );
};

export default Post;
