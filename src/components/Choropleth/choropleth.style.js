import styled from 'styled-components';
import {
  Color, Font, FontSize, FontWeight, LineHeight,
} from 'styles/theme';

export const Bar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColorContainer = styled.div`
  background: ${(props) => props.color};
  box-sizing: border-box;
  height: 7px;
  width: 54px;
`;

export const Legend = styled.div`
  align-items: center;
  display: flex;
  height: 27px;
  justify-content: space-between;
  flex-direction: column;
`;

export const Name = styled.p`
  color: ${Color.dialog};
  font-family: ${Font.body};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.normal};
  line-height: ${LineHeight.legend};
  margin: 0;
  white-space: nowrap;
`;
