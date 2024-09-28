import React from 'react';
import { IconType } from 'react-icons';

interface SocialProps {
  Icon: IconType;
  link: string;
  text: string;
}

const Social: React.FC<SocialProps> = ({ Icon, link, text }) => {
  const isEmail = text.toLowerCase() === 'email';
  const href = isEmail ? `mailto:${link}` : link;

  return (
    <div className="social">
      <a href={href} target={isEmail ? undefined : "_blank"} rel={isEmail ? undefined : "noopener noreferrer"} className="flex items-center justify-between px-4 py-2 mt-4 bg-black text-primary hover:bg-primary hover:text-black rounded-sm">
        <Icon className="h-7 w-7" />
        <div className="ml-2 text-xl">{text}</div>
      </a>
    </div>
  );
}

export default Social;