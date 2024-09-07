import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

const ShareButtons = ({ postUrl, title }) => {
  return (
    <div className="share-buttons">
      <h3>Share this post:</h3>
      <FacebookShareButton url={postUrl} quote={title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      
      <TwitterShareButton url={postUrl} title={title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      
      <LinkedinShareButton url={postUrl} title={title}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      
      <WhatsappShareButton url={postUrl} title={title}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
