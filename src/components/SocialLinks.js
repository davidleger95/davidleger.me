import React, { Component } from 'react';
import logos from '../assets/logos';

const data = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    username: 'davidleger95',
    logo: logos.twitter
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@',
    username: 'davidleger95',
    logo: logos.medium
  },
  {
    name: 'Dev',
    url: 'https://dev.to/',
    username: 'davidleger95',
    logo: logos.dev
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/',
    username: 'davidleger95',
    logo: logos.instagram
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/',
    username: 'davidleger95',
    logo: logos.linkedIn
  }
];

class SocialLinks extends Component {
  render() {
    return (
      <ul className="SocialLinks">
        {data.map(({ name, url, username, logo}) => (
          <li key={name}>
            <a target="_blank" href={`${url}${username}`}>
              <div dangerouslySetInnerHTML={{ __html: logo }} />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default SocialLinks;
