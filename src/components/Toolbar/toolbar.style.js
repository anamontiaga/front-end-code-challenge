import styled from 'styled-components';
import { isTablet } from 'styles/mediaqueries';
import { Color } from 'styles/theme';

export const CollapseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 30px;
  padding-top: 8px;
  &:focus {
    outline: none;
  }
`;

export const CollapseIcon = styled.img`
  transition: transform 0.3s ease-out;
  width: 12px;
  ${(props) => props.isAccordionOpen && `
    transform: rotate(180deg);
  `}
`;

export const CollapseTooltipContainer = styled.div`
  bottom: 40px;
  display: none;
  left: 9px;
  position: absolute;
  ${CollapseButton}:hover + & {
    display: inline-flex;
  }
  ${(props) => props.isAccordionOpen && `
    display: inline-flex;
  `}
  ${isTablet} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  background: ${Color.primary};
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  margin-left: 30px;
  position: relative;
  width: 80px;
  ${isTablet} {
    margin-left: 63px;
  }
`;

export const InfoButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 30px;
  padding-top: 8px;
  &:focus {
    outline: none;
  }
`;

export const InfoIcon = styled.img`
  height: 14px;
  width: 14px;
`;

export const InfoTooltipContainer = styled.div`
  bottom: 40px;
  display: none;
  left: -8px;
  position: absolute;
  ${InfoButton}:hover + & {
    display: inline-flex;
  }
`;

export const VisibilityButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 30px;
  padding-top: 8px;
  &:focus {
    outline: none;
  }
`;

export const VisibilityIcon = styled.img`
  height: 14px;
  width: 14px;
`;

export const VisibilityTooltipContainer = styled.div`
  bottom: 40px;
  display: none;
  right: 20px;
  position: absolute;
  ${VisibilityButton}:hover + & {
    display: inline-flex;
  }
`;
