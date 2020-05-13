import React from 'react';
const handleImageError = fallback => event => {console.log(event, fallback);return event.target.src = fallback};

const Image = () => (
  <img src="https://images.unsplash.com/photo-1531436107035-40b2e85b7a1b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80" width={500} onError={handleImageError("https://softsmart.co.za/wp-content/uploads/2018/06/image-not-found-1038x576.jpg")} />
);

export default Image;