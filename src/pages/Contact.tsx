import React from 'react';
import Social from '../components/Social';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import { FaChessPawn } from 'react-icons/fa6';

const Contact: React.FC = () => {
  return (
    <div className="contact w-1/2 m-auto">
      <Social Icon={FaGithub} link="https://github.com/themohitnair" text="github" />
      <Social Icon={FaLinkedin} link="https://www.linkedin.com/in/themohitnair" text="linkedin" />
      <Social Icon={FaEnvelope} link="themohitnair@protonmail.com" text="email" />
      <Social Icon={FaChessPawn} link="https://www.chess.com/member/skywalkeraboard" text="chess.com" />
    </div>
  );
}

export default Contact;