import styled from 'styled-components';
import { isTablet } from 'styles/mediaqueries';
import { Color, Border, Spacing } from 'styles/theme';

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const Container = styled.section`
  background: ${Color.primary};
  border: ${Border.basic};
  box-sizing: border-box;
  max-width: 320px;
  position: relative;
  ${isTablet} {
    max-width: 520px;
  }
`;

export const Content = styled.div`
  background: ${Color.primary};
  border: 1px solid transparent;
  padding: 0 ${Spacing.s};
`;

export const DragButton = styled.button`
  background: transparent;
  border: none;
  cursor: move;
  &:focus {
    outline: none;
  }
`;

export const DragIcon = styled.img`
  height: 18px;
  margin-right: 10px;
  width: 10px;
`;

export const Header = styled.div`
  align-items: center;
  background: transparent;
  border: none;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${Spacing.xs} ${Spacing.s};
  width: 100%;
`;
