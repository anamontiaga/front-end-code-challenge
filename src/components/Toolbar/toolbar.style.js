import styled from 'styled-components';
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

export const Container = styled.div`
  background: ${Color.primary};
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  margin-left: 40px;
  position: relative;
  width: 80px;
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

export const TooltipContainer = styled.div`
  bottom: 40px;
  display: none;
  left: 9px;
  position: absolute;
  ${CollapseButton}:hover + & {
    display: inline-flex;
  }
`;

export const VisibilityIcon = styled.img`
  height: 14px;
  width: 14px;
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
