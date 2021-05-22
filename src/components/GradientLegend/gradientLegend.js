import React from 'react';
import PropTypes from 'prop-types';
import * as S from './gradientLegend.style';

export const GradientLegend = ({ caption, items, text }) => {
  const gradientColors = items.map((item) => item.color).toString();

  return (
    <S.Wrapper>
      <S.Bar colors={gradientColors} />
      <S.NameContainer>
        {items.map((item) => (
          <S.Name>{item.name}</S.Name>
        ))}
      </S.NameContainer>
      <S.Text>
        {text}
      </S.Text>
      <S.Link>{caption}</S.Link>
    </S.Wrapper>
  );
};

GradientLegend.propTypes = {
  caption: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  text: PropTypes.string.isRequired,
};
