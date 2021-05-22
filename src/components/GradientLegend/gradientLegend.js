import React from 'react';
import PropTypes from 'prop-types';
import * as S from './gradientLegend.style';

export const GradientLegend = ({ items }) => {
  const gradientColors = items.map((item) => item.color).toString();

  return (
    <S.Wrapper>
      <S.Bar colors={gradientColors} />
      <S.NameContainer>
        {items.map((item) => (
          <S.Name>{item.name}</S.Name>
        ))}
      </S.NameContainer>
    </S.Wrapper>
  );
};

GradientLegend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
