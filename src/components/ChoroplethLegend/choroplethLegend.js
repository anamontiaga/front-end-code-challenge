import React from 'react';
import PropTypes from 'prop-types';
import * as S from './choroplethLegend.style';

export const ChoroplethLegend = ({ items }) => {
  const removeWhiteSpaces = (string) => string.split(' ').join('');
  return (
    <S.Bar>
      {items.map((item) => (
        <S.Legend>
          <S.ColorContainer color={item.color} />
          <S.Name>{removeWhiteSpaces(item.name)}</S.Name>
        </S.Legend>
      ))}
    </S.Bar>
  );
};

ChoroplethLegend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
