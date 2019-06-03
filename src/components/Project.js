import React from 'react';

import ProjectStyled from './styles/ProjectStyles.js';
import Github from '../images/github.svg';
import CodePen from '../images/codepen.svg';

function Project(props) {
  if (props.link) {
    return (
      <a href={props.link}>
        <ProjectStyled>
          <p className="owner">{props.owner}</p>
          <p className="name">{props.name}</p>
          <p className="desc">{props.desc}</p>
          <div className="links">
            {props.codepenLink && (
              <a
                className="codepen"
                href={props.codepenLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="icon codepen" src={CodePen} alt="CodePen" />
              </a>
            )}
            <a
              className="github"
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon github" src={Github} alt="Github" />
            </a>
          </div>
        </ProjectStyled>
      </a>
    );
  } else {
    return (
      <ProjectStyled>
        <p className="owner">{props.owner}</p>
        <p className="name">{props.name}</p>
        <p className="desc">{props.desc}</p>
        <div className="links">
          {props.codepenLink && (
            <a
              className="codepen"
              href={props.codepenLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon codepen" src={CodePen} alt="CodePen" />
            </a>
          )}
          <a
            className="github"
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon github" src={Github} alt="Github" />
          </a>
        </div>
      </ProjectStyled>
    );
  }
}

export default Project;
