import styled from 'styled-components';
import { isTablet } from 'styles/mediaqueries';
import {
  Border, Color, Font, LineHeight, Radius, Spacing,
} from 'styles/theme';

export const Card = styled.div`
  background-color: ${Color.primary};
  border: ${Border.basic};
  border-radius: ${Radius.basic};
  max-height: 400px;
  margin: auto;
  overflow: auto;
  padding: 40px 20px;
  position: relative;
  width: 80%;
  ${isTablet} {
    padding: 60px;
    width: 40%;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 24px;
  position: absolute;
  right: ${Spacing.m};
  top: ${Spacing.m};
  width: 24px;
  &:focus {
    outline: none;
  }
`;

export const CloseIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const Info = styled.p`
  color: ${Color.body};
  font-family: ${Font.body};
  line-height: ${LineHeight.dialog};
`;

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  left: 0;
  overflow: auto;
  padding-top: 100px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;
