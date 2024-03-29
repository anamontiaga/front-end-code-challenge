import styled from 'styled-components';
import { isTablet } from 'styles/mediaqueries';
import { Color, Font } from 'styles/theme';

export const Body = styled.p`
  color: ${Color.neutral.iron};
  font-family: ${Font.body};
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  margin: 0 0 16px 0;
`;

export const DragContainer = styled.div`
  height: auto;
  width: 100%;
`;

export const Legend = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  ${isTablet} {
    top: 80px;
  }
`;

export const View = styled.body`
  align-items: center;
  background: ${Color.background};
  display: flex;  
  height: 700px;
  justify-content: center;
  width: 100vw;
`;
