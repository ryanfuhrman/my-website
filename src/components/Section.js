import React from 'react';
import { Link } from 'gatsby';

import StyledSection from './styles/SectionStyles';

const Section = ({
  className,
  link,
  iconLink,
  header,
  subheader,
  children,
}) => {
  if (link) {
    return (
      <StyledSection className={className}>
        <div className="header-div">
          <h2 className="header">
            <Link to={`/${link}`} className="link">
              {header}
            </Link>
          </h2>
        </div>
        <h3 className="subheader">{subheader}</h3>
        <div className="children">{children}</div>
      </StyledSection>
    );
  } else {
    return (
      <StyledSection className={className}>
        <div className="header-div">
          <h2 className="header">{header}</h2>
        </div>
        <h3 className="subheader">{subheader}</h3>
        <div className="children">{children}</div>
      </StyledSection>
    );
  }
};

export default Section;
