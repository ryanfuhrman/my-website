import styled from 'styled-components';
import Section from '../Section';

const ProjectsStyled = styled(Section)`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h2 {
    animation: fadeIn 1.5s 0.5s backwards;
  }

  h3 {
    animation: fadeIn 1.5s 0.75s backwards;
  }

  .project-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    grid-template-areas:
      'twitch-app markdown-viewer'
      'my-website calculator';
    width: 100%;
    animation: fadeIn 1.5s 1s backwards;

    .twitch-app {
      grid-area: twitch-app;
    }
    .markdown-viewer {
      grid-area: markdown-viewer;
    }
    .my-website {
      grid-area: my-website;
    }
    .calculator {
      grid-area: calculator;
    }
  }

  .more-btn {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    display: inline-block;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    background: #e2e3e4;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    animation: fadeIn 1.5s 1.25s backwards;

    :hover,
    :focus {
      background: #0069ed;
    }

    :focus {
      outline: 1px solid #fff;
      outline-offset: -4px;
    }

    :active {
      transform: scale(0.99);
    }
  }

  @media (max-width: 600px) {
    .project-container {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default ProjectsStyled;
