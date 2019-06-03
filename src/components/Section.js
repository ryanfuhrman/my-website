import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledSection = styled.div`
  max-width: 704px;
  margin-top: 40px;
  margin-bottom: 35px;
  width: 100%;

  .link {
    text-decoration: none;
    color: hsla(0, 0%, 0%, 0.8);

    :hover {
    }
  }

  .header {
    margin-bottom: 10px;
    font-size: 24px;
  }

  .subheader {
    margin-bottom: 25px;
    font-size: 18px;
    color: slategray;
    font-weight: normal;
  }

  @media (max-width: 600px) {
    margin-top: 30px;
    margin-bottom: 24px;
  }
`;

const Section = ({ className, link, header, subheader, children }) => {
  return (
    <StyledSection className={className}>
      <h2 className="header">
        {(link && (
          <Link to={`/${link}`} className="link">
            {header}
          </Link>
        )) ||
          header}
      </h2>
      <h3 className="subheader">{subheader}</h3>
      <div className="children">{children}</div>
    </StyledSection>
  );
};

export default Section;
