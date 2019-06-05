import React from 'react';

import ProjectStyled from './styles/ProjectStyles.js';
import Github from '../images/github.svg';
import CodePen from '../images/codepen.svg';
import LiveLinkLogo from '../images/livelink.svg';

function Project({
  owner,
  name,
  desc,
  liveLink,
  codepenLink,
  githubLink,
  githubProjectLink,
}) {
  return (
    <ProjectStyled>
      <p className="owner">{owner}</p>
      <p className="name">{name}</p>
      <p className="desc">{desc}</p>
      <div className="links">
        {(liveLink && (
          <a
            className="livelink"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon livelink" src={LiveLinkLogo} alt={liveLink} />
          </a>
        )) ||
          (!liveLink && codepenLink && (
            <a
              className="codepen"
              href={codepenLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon codepen" src={CodePen} alt="CodePen" />
            </a>
          ))}
        <a
          className="github"
          href={githubProjectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon github" src={Github} alt="Github" />
        </a>
      </div>
    </ProjectStyled>
  );
}

export default Project;
