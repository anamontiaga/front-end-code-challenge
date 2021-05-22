import React, { useEffect } from 'react';
import { animated } from 'react-spring';
import PropTypes from 'prop-types';
import closeIcon from 'assets/icons/cross.svg';
import * as S from './modal.style';

export const Modal = ({
  content,
  onCloseModal,
  openModalAnimation,
}) => {
  useEffect(() => {
    const contentEle = document.getElementById('content');
    contentEle.innerHTML = content;
  }, []);

  return (
    <S.Wrapper>
      <animated.div style={openModalAnimation}>
        <S.Card>
          <S.CloseButton onClick={onCloseModal}>
            <S.CloseIcon alt="close modal" src={closeIcon} />
          </S.CloseButton>
          <S.Info id="content">
            {content}
          </S.Info>
        </S.Card>
      </animated.div>
    </S.Wrapper>
  );
};

Modal.propTypes = {
  content: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  openModalAnimation: PropTypes.string.isRequired,
};
