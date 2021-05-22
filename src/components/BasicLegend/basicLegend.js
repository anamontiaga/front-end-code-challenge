import React from 'react';
import PropTypes from 'prop-types';
import * as S from './basicLegend.style';

export const BasicLegend = ({ items }) => (
  <S.Container>
    {items.map((item) => (
      <div>
        <div color={item.color} />
        <p>{item.name}</p>
      </div>
    ))}
  </S.Container>
);

BasicLegend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
