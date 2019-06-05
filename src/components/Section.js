import React from 'react';

import StyledSection from './styles/SectionStyles';

const Section = ({ className, header, subheader, children }) => {
  return (
    <StyledSection className={className}>
      <div className="header-div">
        <h2 className="header">{header}</h2>
      </div>
      <h3 className="subheader">{subheader}</h3>
      <div className="children">{children}</div>
    </StyledSection>
  );
};

export default Section;
