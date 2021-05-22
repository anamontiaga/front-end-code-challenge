import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'components/Heading/heading';
import { Modal } from 'components/Modal/modal';
import { Tooltip } from 'components/Tooltip/tooltip';
import chevronIcon from 'assets/icons/arrow-down.svg';
import dragIcon from 'assets/icons/drag-dots.svg';
import infoIcon from 'assets/icons/info.svg';
import * as S from './accordion.style';
import * as C from './accordion.constants';

export const Accordion = ({
  description,
  children,
  title,
}) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isModalDisplay, setModalDisplay] = useState(false);

  const onChangeCollapse = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  const onChangeInfo = () => {
    setModalDisplay(true);
  };

  return (
    <S.Container isAccordionOpen={isAccordionOpen}>
      <S.Header>
        <S.Button>
          <S.Column>
            <S.DragIcon alt="drag section" src={dragIcon} />
            <Heading content={title} />
          </S.Column>
          <S.InfoButton onClick={onChangeInfo}>
            <S.InfoIcon alt="show description" src={infoIcon} />
          </S.InfoButton>
          <S.ChevronButton onClick={onChangeCollapse}>
            <S.ChevronIcon alt="change collapse" isAccordionOpen={isAccordionOpen} src={chevronIcon} />
          </S.ChevronButton>
          <S.TooltipContainer>
            <Tooltip content={isAccordionOpen ? C.COLLAPSE_TEXT : C.EXPAND_TEXT} />
          </S.TooltipContainer>
        </S.Button>
      </S.Header>
      {isAccordionOpen && (
        <S.Content>
          {children}
        </S.Content>
      )}
      {isModalDisplay && (
        <Modal content={description} onCloseModal={() => setModalDisplay(false)} />
      )}
    </S.Container>
  );
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
