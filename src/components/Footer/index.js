import React from 'react';
import { Navigation } from './styles';
import { Link } from 'react-router-dom';

const Footer = ({ name1, link1, name2, link2 }) => {
  return (
    <>
      <Navigation>
        <Link to={`/${link1}`}>{name1}</Link>
        <Link to={`/${link2}`}>{name2}</Link>
      </Navigation>
    </>
  );
};

export default Footer;
