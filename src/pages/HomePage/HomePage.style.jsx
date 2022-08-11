import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constants/breakpoints';

export const StyledHomePage = styled.div``;

export const StyledHeroContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 0 15px;
  }
`;

export const StyledServicesWrapper = styled.div`
  background-color: #e2e6e9;
`;
