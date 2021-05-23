import styled from 'styled-components';
import {
  Color, Font, FontSize, FontWeight, LineHeight,
} from 'styles/theme';

export const Bar = styled.div`
  box-sizing: border-box;
  height: 7px;
  width: 100%;
  ${(props) => props.colors && `
    background: linear-gradient(to right, ${props.colors});
  `}
`;

export const Link = styled.button`
  background: transparent;
  border: none;
  color: ${Color.link};
  cursor: pointer;
  font-family: ${Font.body};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.normal};
  line-height: ${LineHeight.legend};
  margin: 0;
  padding: 0;
  text-align: left;
  white-space: nowrap;
  &:focus {
    outline: none;
  }
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

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
  width: 100%;
`;

export const Text = styled.p`
  color: ${Color.dialog};
  font-family: ${Font.body};
  font-size: ${FontSize.small};
  font-weight: ${FontWeight.normal};
  line-height: ${LineHeight.body};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
