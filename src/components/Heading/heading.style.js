import styled from 'styled-components';
import { isTablet } from 'styles/mediaqueries';
import {
  Color, Font, FontSize, FontWeight, LineHeight,
} from 'styles/theme';

export const Content = styled.h1`
  color: ${Color.heading};
  font-family: ${Font.heading};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.bold};
  line-height: ${LineHeight.heading};
  margin: 0;
  ${isTablet} {
    font-size: ${FontSize.big};
    white-space: nowrap;
  }
`;
