import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constants/breakpoints';

export const StyledCardWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  background: url(${(props) => props.image});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  width: calc((100% / 2) - 10px);
  height: 350px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: calc((100% / 2) - 15px);
    height: 430px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: calc((100% / 3) - 32px);
  }
`;

export const StyledCardBottomDiv = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.color.black};
  padding: 24px 10px;
`;

// Card bottom-div title
export const StyledCardNameTitle = styled.p`
  ${({ theme }) => theme.title2};
  color: ${({ theme }) => theme.color.white};
`;

// Card bottom-div span
export const StyledCardPositionSpan = styled.span`
  ${({ theme }) => theme.caption};
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: 600;
  font-size: 14px;
`;
