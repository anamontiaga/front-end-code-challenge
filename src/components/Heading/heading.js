import React from 'react';
import PropTypes from 'prop-types';
import * as S from './heading.style';

export const Heading = ({ content }) => (
  <S.Content>{content}</S.Content>
);

Heading.propTypes = {
  content: PropTypes.string.isRequired,
};
