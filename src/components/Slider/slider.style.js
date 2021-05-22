import styled from 'styled-components';
import {
  Color, Font, FontSize, LineHeight,
} from 'styles/theme';

export const Container = styled.div`
  max-width: 100%;
  position: relative;
`;

export const InputLeft = styled.input`
  bottom: -12px;
  cursor: pointer;
  height: 1px;
  max-width: 320px;
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
  &::-webkit-slider-thumb {
    background-color: #CAB2D6;
    border: 0 none;
    border-radius: 0;
    height: 12px;
    width: 12px;
  }
  &::-moz-range-thumb {
    background-color: #CAB2D6;
    border: 0 none;
    border-radius: 0;
    height: 12px;
    width: 12px;
  }
`;

export const InputRight = styled.input`
  bottom: -12px;
  cursor: pointer;
  height: 1px;
  max-width: 320px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 2;
  &::-webkit-slider-thumb {
    width: 24px;
    height: 24px;
    border-radius: 0;
    border: 0 none;
    background-color: ${Color.primary};
    pointer-events: auto;
  }
  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 0;
    border: 0 none;
    background-color: ${Color.primary};
    pointer-events: auto;
  }
`;

export const MaxCounter = styled.div`
  background: red;
  border-radius: 2rem;
  box-sizing: border-box;
  color: ${Color.white};
  height: 25px;
  font-family: ${Font.body};
  font-size: ${FontSize.small};
  line-height: ${LineHeight.body};
  margin-bottom: 10px;
  margin-left: ${(props) => props.maxDate && `${320 * (props.maxDate / 100) - 16}px`};
  text-align: center;
  padding: 5px 3px 5px 3px;
  position: absolute;
  visibility: hidden;
  width: 25px;
  &:after {
    border-right: 9.5px solid transparent;
    border-top: 9px solid red;
    border-left: 9.5px solid transparent;
    bottom: -4.8px;
    content: "";
    height: 0;
    left: 3px;
    position: absolute;
    width: 0; 
  }
`;

export const MinCounter = styled.div`
  background: red;
  border-radius: 2rem;
  box-sizing: border-box;
  color: ${Color.primary};
  height: 25px;
  font-family: ${Font.body};
  font-size: ${FontSize.small};
  line-height: ${LineHeight.body};
  margin-bottom: 10px;
  margin-left: ${(props) => props.minDate && `${props.minDate - 2.7}%`};
  text-align: center;
  padding: 5px 3px 5px 3px;
  position: relative;
  visibility: hidden;
  width: 25px;
  &:after {
    border-right: 9.5px solid transparent;
    border-top: 9px solid blue;
    border-left: 9.5px solid transparent;
    bottom: -4.8px;
    content: "";
    height: 0;
    left: 3px;
    position: absolute;
    width: 0; 
  }
`;

export const Range = styled.div`
  background-color: #CAB2D6;
  border-radius: 5px;
  bottom: -4px;
  left: ${(props) => `${props.minValue}%`};
  pointer-events: none;
  position: absolute;
  right: ${(props) => `${100 - props.maxValue}%`};
  top: 4px;
  z-index: 2;
`;

export const Slider = styled.div`
  border-radius: 2em;
  height: 8px;
  position: relative;
  z-index: 1;
`;

export const ThumbLeft = styled.div`
  background-color: #CAB2D6;
  border-radius: 2em;
  box-sizing: border-box;
  cursor: pointer;
  height: 12px;
  pointer-events: auto;
  position: absolute;
  transform: translate(-8px, -3px);
  width: 12px;
  z-index: 5;
  ${(props) => (props.minDate > props.maxDate) && `
    left: ${props.maxDate - 7.5}%;
  `}
  ${(props) => (props.minDate < props.maxDate) && `
    left: ${props.minDate}%;
  `}
`;

export const ThumbRight = styled.div`
  background-color: #CAB2D6;
  border-radius: 2em;
  box-sizing: border-box;
  cursor: pointer;
  height: 12px;
  pointer-events: auto;
  position: absolute;
  right: ${(props) => `${100 - props.maxDate}%`};
  transform: translate(8px, -3px);
  width: 12px;
  z-index: 5;
`;

export const Track = styled.div`
  background: #CCCCCC;
  bottom: -4px;
  border-radius: 4px;
  left: 0;
  position: absolute;
  right: 0;
  top: 4px;
  z-index: 1;
`;
