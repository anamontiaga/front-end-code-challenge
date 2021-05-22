import React from 'react';
import PropTypes from 'prop-types';
import * as S from './basicLegend.style';

export const BasicLegend = ({ items }) => (
  <S.Wrapper>
    {items.map((item) => (
      <S.Legend>
        <S.ColorContainer color={item.color} />
        <S.Name>{item.name}</S.Name>
      </S.Legend>
    ))}
  </S.Wrapper>
);

BasicLegend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
