import React from 'react';
import PropTypes from 'prop-types';
import * as S from './tooltip.style';

export const Tooltip = ({ content }) => (
  <S.Container>
    <S.Content>{content}</S.Content>
    <S.Indicator />
  </S.Container>
);

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
};
