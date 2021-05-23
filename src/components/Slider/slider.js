import React from 'react';
import PropTypes from 'prop-types';
import * as S from './slider.style';

export const Slider = ({ maxDate, minDate/* , speed, step */ }) => (
  <S.Wrapper>
    {minDate}
    {maxDate}
  </S.Wrapper>
);

Slider.propTypes = {
  maxDate: PropTypes.number.isRequired,
  minDate: PropTypes.number.isRequired,
};
