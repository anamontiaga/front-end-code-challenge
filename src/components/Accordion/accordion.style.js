import styled from 'styled-components';
import { Color, Border, Spacing } from 'styles/theme';

export const Button = styled.div`
  align-items: center;
  background: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${Spacing.xs} ${Spacing.s};
  width: 100%;
`;

export const ChevronButton = styled.button`
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

export const ChevronIcon = styled.img`
  transition: transform 0.3s ease-out;
  width: 12px;
  ${(props) => props.isAccordionOpen && `
    transform: rotate(180deg);
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const Container = styled.div`
  background: ${Color.primary};
  border: ${Border.basic};
  box-sizing: border-box;
  max-width: 520px;
  position: relative;
`;

export const Content = styled.div`
  background: ${Color.primary};
  padding: 0 ${Spacing.s} ${Spacing.s} ${Spacing.s};
`;

export const DragIcon = styled.img`
  height: 18px;
  margin-right: 10px;
  width: 10px;
`;

export const Header = styled.div`
  background: transparent;
  height: 100%;
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
  display: none;
  position: absolute;
  ${ChevronButton}:hover + & {
    display: block;
  }
`;
