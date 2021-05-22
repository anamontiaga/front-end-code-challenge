import styled from 'styled-components';
import {
  Color, Font, FontSize, FontWeight, LineHeight,
} from 'styles/theme';

export const Content = styled.h1`
  color: ${Color.heading};
  font-family: ${Font.heading};
  font-size: ${FontSize.big};
  font-weight: ${FontWeight.bold};
  line-height: ${LineHeight.heading};
  margin: 0;
`;
