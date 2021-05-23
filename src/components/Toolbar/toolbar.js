import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'components/Tooltip/tooltip';
import collapseIcon from 'assets/icons/arrow-down.svg';
import hideIcon from 'assets/icons/hide.svg';
import infoIcon from 'assets/icons/info.svg';
import showIcon from 'assets/icons/show.svg';
import * as C from './toolbar.constants';
import * as S from './toolbar.style';

export const Toolbar = ({
  isAccordionOpen,
  isLayerVisible,
  isModalDisplay,
  onChangeCollapse,
  onChangeInfo,
  onChangeVisibility,
}) => (
  <S.Wrapper>
    <S.VisibilityButton onClick={onChangeVisibility}>
      <S.VisibilityIcon alt="changeVisibility" src={isLayerVisible ? hideIcon : showIcon} />
    </S.VisibilityButton>
    <S.VisibilityTooltipContainer isLayerVisible={isLayerVisible}>
      <Tooltip content={isLayerVisible ? C.HIDE_TEXT : C.SHOW_TEXT} />
    </S.VisibilityTooltipContainer>
    <S.InfoButton onClick={onChangeInfo}>
      <S.InfoIcon alt="show description" src={infoIcon} />
    </S.InfoButton>
    <S.InfoTooltipContainer isModalDisplay={isModalDisplay}>
      <Tooltip content={C.INFO_TEXT} />
    </S.InfoTooltipContainer>
    <S.CollapseButton onClick={onChangeCollapse}>
      <S.CollapseIcon alt="change collapse" isAccordionOpen={isAccordionOpen} src={collapseIcon} />
    </S.CollapseButton>
    <S.CollapseTooltipContainer isAccordionOpen={isAccordionOpen}>
      <Tooltip content={isAccordionOpen ? C.COLLAPSE_TEXT : C.EXPAND_TEXT} />
    </S.CollapseTooltipContainer>
  </S.Wrapper>
);

Toolbar.propTypes = {
  isAccordionOpen: PropTypes.bool.isRequired,
  isLayerVisible: PropTypes.bool.isRequired,
  isModalDisplay: PropTypes.bool.isRequired,
  onChangeCollapse: PropTypes.func.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
  onChangeVisibility: PropTypes.func.isRequired,
};
