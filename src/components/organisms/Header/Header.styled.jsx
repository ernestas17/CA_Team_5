import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constants/breakpoints';

export const StyleHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;

  padding: 18px 0;

  & svg {
    display: block;
    color: #1e1b1b;
  }

  & a {
    align-self: center;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    justify-content: space-between;
  }
`;

export const StyleHeaderSeparator = styled.div`
  height: 2px;
  width: 100%;

  background-color: #939191;
  opacity: 0.36;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    height: 100%;
    width: 2px;
  }
`;

export const StyleNavigationWrapper = styled.div`
  display: ${({ isNavOpen }) => (isNavOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: flex;
    flex-direction: row;

    width: auto;
  }
`;

export const StyleHeaderContactsWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;

  color: #000;
`;

export const StyleHeaderContactsIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #61c3a1;

  border-radius: 50%;

  width: 40px;
  height: 40px;
`;

export const StyleHeaderContactsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & p:first-of-type {
    font-weight: 500;
    font-size: 16px;

    opacity: 0.7;
  }

  & p:last-of-type {
    font-weight: 600;
    font-size: 18px;
  }
`;

export const StyleHeaderNavButtonWrapper = styled.div`
  display: block;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;