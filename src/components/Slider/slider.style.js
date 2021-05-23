import styled from 'styled-components';
import {
  Color, Font, FontSize, FontWeight, LineHeight, Radius,
} from 'styles/theme';

export const SliderBar = styled.div`
  align-self: center;
  height: 3px;
  width: 100%;
`;

export const SliderWrapper = styled.div`
  display: flex;
  height: 10px;
  width: 100%;
`;

export const Thumb = styled.div`
  background: ${Color.slider};
  border-radius: ${Radius.circle};
  height: 12px;
  width: 12px;
`;

export const ThumbTouchArea = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  height: 42px;
  justify-content: center;
  width: 42px;
`;

export const ValueLegend = styled.p`
  color: ${Color.dialog};
  font-family: ${Font.body};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.normal};
  line-height: ${LineHeight.legend};
  margin: 6px 0 0 0;
`;

export const ValuesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;
