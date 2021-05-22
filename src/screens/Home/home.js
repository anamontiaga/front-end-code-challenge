import React from 'react';
import { Accordion } from 'components/Accordion/accordion';
import * as S from './home.style';

export const Home = () => (
  <S.View>
    <S.Legend>
      <Accordion description="Description 1" title="2017 African and Asian Conflict and Protest Events">
        <S.Body>
          Battle-No change of territory
          Battle-No change of territory Battle-No change of territory
          Battle-No change of territory Battle-No change of territory
          Battle-No change of territory Battle-No change of territory
          Battle-No change of territory Battle-No change of territory
        </S.Body>
      </Accordion>
      <Accordion description="Description 2" title="2015 Accessibility to Cities">
        <S.Body>
          Battle-No change of territory
        </S.Body>
      </Accordion>
      <Accordion description="Description 3" title="2017 African and Asian Conflict and Protest Events">
        <S.Body>
          Battle-No change of territory
        </S.Body>
      </Accordion>
      <Accordion description="Description 4" title="Tree cover loss">
        <S.Body>
          Battle-No change of territory
        </S.Body>
      </Accordion>
    </S.Legend>
  </S.View>
);
