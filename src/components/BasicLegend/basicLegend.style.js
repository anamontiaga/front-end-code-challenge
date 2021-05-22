import styled from 'styled-components';
import {
  Border, Color, Font, FontSize, FontWeight, LineHeight, Radius, Shadow, Spacing,
} from 'styles/theme';

export const Container = styled.div`
  background: ${Color.primary};
  border: ${Border.basic}; 
  border-radius: ${Radius.basic}; 
  box-shadow: ${Shadow.veryHighlighted};
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  height: auto;
  padding: calc(${Spacing.xs} + ${Spacing.xxs}) calc(${Spacing.xs} + ${Spacing.xs});
  position: relative;
`;

export const Content = styled.p`
  color: ${Color.dialog};
  font-family: ${Font.heading};
  font-size: ${FontSize.big};
  font-weight: ${FontWeight.normal};
  line-height: ${LineHeight.dialog};
  margin: 0;
  white-space: nowrap;
`;
