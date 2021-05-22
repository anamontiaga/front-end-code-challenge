import React, { useState } from 'react';
// import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import { Heading } from 'components/Heading/heading';
import { Tooltip } from 'components/Tooltip/tooltip';
// import { Color } from 'styles/theme';
import chevronIcon from 'assets/icons/arrow-down.svg';
import dragIcon from 'assets/icons/drag-dots.svg';
import * as S from './accordion.style';
import * as C from './accordion.constants';

export const Accordion = ({
  title,
  children,
}) => {
  const [isOpen, setOpen] = useState(false);

  const onChangeCollapse = () => {
    setOpen(!isOpen);
  };

  return (
    <S.Container isOpen={isOpen}>
      <S.Header>
        <S.Button>
          <S.Column>
            <S.DragIcon src={dragIcon} alt="drag section" />
            <Heading content={title} />
          </S.Column>
          <S.ChevronAreaButton onClick={onChangeCollapse}>
            <S.ChevronIcon isOpen={isOpen} src={chevronIcon} />
          </S.ChevronAreaButton>
          <S.TooltipContainer>
            <Tooltip content={isOpen ? C.COLLAPSE_TEXT : C.EXPAND_TEXT} />
          </S.TooltipContainer>
        </S.Button>
      </S.Header>
      {isOpen && (
        <S.Content>
          {children}
        </S.Content>
      )}
    </S.Container>
  );
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
};
