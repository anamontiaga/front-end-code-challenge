import React from 'react';
import { Heading } from 'components/Heading/heading';
import { Tooltip } from 'components/Tooltip/tooltip';
import * as S from './home.style';

export const Home = () => (
  <>
    <Heading content="2017 African and Asian Conflict and Protest Events" />
    <S.Body>Battle-No change of territory</S.Body>
    <Tooltip content="Layer Info" />
  </>
);
