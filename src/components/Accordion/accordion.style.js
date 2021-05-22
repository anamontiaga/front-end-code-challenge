import styled from 'styled-components';
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
