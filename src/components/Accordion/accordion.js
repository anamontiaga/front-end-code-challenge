import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import { Heading } from 'components/Heading/heading';
import { Modal } from 'components/Modal/modal';
import { Toolbar } from 'components/Toolbar/toolbar';
import dragIcon from 'assets/icons/drag-dots.svg';
import * as S from './accordion.style';

export const Accordion = ({
  children, description, onChangeAccordion, title,
}) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isModalDisplay, setModalDisplay] = useState(false);
  const [isLayerVisible, setLayerVisible] = useState(true);
  const handleVisibility = () => setLayerVisible(!isLayerVisible);

  const openAccordionAnimation = useSpring({
    transform: isAccordionOpen ? 'translateY(0)' : 'translateY(-15%)',
    opacity: isAccordionOpen ? 1 : 0,
    transition: '0.3s ease-out',
  });

  const openModalAnimation = useSpring({
    opacity: isModalDisplay ? '1' : '0',
    transform: isModalDisplay ? 'scale(1)' : 'scale(0)',
    transition: '0.3s ease-out',
  });

  return (
    <S.Container
      isAccordionOpen={isAccordionOpen}
      onChange={onChangeAccordion(isAccordionOpen)}
    >
      <S.Header>
        <S.Column>
          <S.DragButton>
            <S.DragIcon alt="drag section" src={dragIcon} />
          </S.DragButton>
          <Heading content={title} />
        </S.Column>
        <Toolbar
          isAccordionOpen={isAccordionOpen}
          isLayerVisible={isLayerVisible}
          onChangeCollapse={() => setAccordionOpen(!isAccordionOpen)}
          onChangeInfo={() => setModalDisplay(true)}
          onChangeVisibility={handleVisibility}
        />
      </S.Header>
      {isAccordionOpen && (
        <animated.div style={openAccordionAnimation}>
          <S.Content isLayerVisible={isLayerVisible}>
            {children}
          </S.Content>
        </animated.div>
      )}
      {isModalDisplay && (
        <Modal
          content={description}
          onCloseModal={() => setModalDisplay(false)}
          openModalAnimation={openModalAnimation}
        />
      )}
    </S.Container>
  );
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  description: PropTypes.string.isRequired,
  onChangeAccordion: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
