import React from 'react';
import PropTypes from 'prop-types';
import * as S from './choroplethLegend.style';

export const ChoroplethLegend = ({ items }) => (
  <S.Bar>
    {items.map((item) => (
      <S.Legend>
        <S.ColorContainer color={item.color} />
        <S.Name>{item.name.split(' ').join('')}</S.Name>
      </S.Legend>
    ))}
  </S.Bar>
);

ChoroplethLegend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
