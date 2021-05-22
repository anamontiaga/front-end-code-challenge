import { createGlobalStyle } from 'styled-components';
import LatoRegular from '../fonts/Lato-Regular.woff';
import OpenSansRegular from '../fonts/OpenSans-Regular.woff';

export const GlobalStyles = createGlobalStyle`
  * {
    @import url(${OpenSansRegular});
    font-family: OpenSans-Regular;
  }
  @font-face {
    font-family: 'Lato-Regular';
    src: url(${LatoRegular}) format('woff');
  }
  @font-face {
    font-family: 'OpenSans-Regular';
    src: url(${OpenSansRegular}) format('woff');
  }
`;
