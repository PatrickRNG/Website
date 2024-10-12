import React from 'react';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import { Title, Subtitle, Author, PublishDate, PostWrapper } from './styles';

const Post = ({ title, subtitle, author, date, link, ...rest }) => {
  const formattedDate = format(new Date(`${date} 00:00:00`), 'do MMM, y');
  return (
    <div>
      <PostWrapper
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300 }}
        {...rest}
      >
        <Link style={{ textDecoration: 'none' }} to={link}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Author>
            {author}
            <PublishDate>{formattedDate}</PublishDate>
          </Author>
        </Link>
      </PostWrapper>
    </div>
  );
};

export default Post;
