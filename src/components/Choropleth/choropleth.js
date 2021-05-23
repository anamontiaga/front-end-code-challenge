import React from 'react';
import PropTypes from 'prop-types';
import * as S from './choropleth.style';

export const Choropleth = ({ items }) => {
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

Choropleth.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
