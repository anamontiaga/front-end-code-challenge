import React from 'react';
import PropTypes from 'prop-types';
import * as S from './basic.style';

export const Basic = ({ items }) => (
  <S.Wrapper>
    {items.map((item) => (
      <S.Legend>
        <S.ColorContainer color={item.color} />
        <S.Name>{item.name}</S.Name>
      </S.Legend>
    ))}
  </S.Wrapper>
);

Basic.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
