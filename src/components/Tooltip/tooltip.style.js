import styled from 'styled-components';
import { Font } from 'styles/theme';

export const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(26, 28, 34, 0.1); 
  border-radius: 4px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  height: auto;
  padding: 12px 16px;
  position: relative;
`;

export const Content = styled.p`
  color: #888888;
  font-family: ${Font.heading};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
`;

export const Indicator = styled.div`
  background: #FFFFFF;
  border: 1px solid rgba(26, 28, 34, 0.1);
  border-top: transparent;
  border-right: transparent;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1); 
  height: 18.55px;
  left: 37.16px;
  top: 35px;
  transform: rotate(-45deg);
  position: absolute;
  width: 18.55px;
  z-index: 0;
`;
