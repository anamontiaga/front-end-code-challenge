import styled from 'styled-components';
import { Color, Radius } from 'styles/theme';

export const Wrapper = styled.div`
  position: relative;
`;

export const Thumb = styled.div`
  background: ${Color.slider};
  border-radius: ${Radius.circle};
  height: 12px;
  width: 12px;
`;
