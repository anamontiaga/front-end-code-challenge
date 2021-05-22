import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from 'assets/icons/cross.svg';
import * as S from './modal.style';

export const Modal = ({
  onCloseModal,
  content,
}) => (
  <S.Wrapper>
    <S.Card>
      <S.CloseButton onClick={onCloseModal}>
        <S.CloseIcon alt="close modal" src={closeIcon} />
      </S.CloseButton>
      <S.Info>
        {content}
      </S.Info>
    </S.Card>
  </S.Wrapper>
);

Modal.propTypes = {
  content: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
