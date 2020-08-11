import React from 'react';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { Card } from './styles';

const TwitterCard = ({ name, username, url, image }) => {
  const {
    socialMedia: { twitter },
  } = useSiteMetadata();
  return (
    <Card href={twitter} target="_blank">
      <div className="wrapper">
        <div className="title">
        {name} ({username}) | Twitter
        </div>
        <div className="link">Twitter.com</div>
      </div>
      <img
        src={image}
        alt="Twitter user"
        className="photo"
      />
    </Card>
  );
};

export default TwitterCard;
