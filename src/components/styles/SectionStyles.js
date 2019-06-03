import styled from 'styled-components';

const SectionStyled = styled.div`
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

export default SectionStyled;
