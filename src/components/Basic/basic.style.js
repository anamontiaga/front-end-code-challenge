import styled from 'styled-components';
import {
  Color, Font, FontSize, FontWeight, LineHeight, Radius, Spacing,
} from 'styles/theme';

export const ColorContainer = styled.div`
  background: ${(props) => props.color};
  border-radius: ${Radius.circle};
  height: 12px;
  margin: 0 ${Spacing.xs} 0 0;
  width: 12px;
`;

export const Legend = styled.div`
  align-items: left;
  display: flex;
  height: 18px;
  flex-direction: row;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 18px;
`;
