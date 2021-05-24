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
  onChangeCollapse,
  onChangeInfo,
  onChangeVisibility,
}) => (
  <S.Wrapper data-cy="toolbar">
    <S.VisibilityButton data-cy="visibility-btn" onClick={onChangeVisibility}>
      <S.VisibilityIcon alt="changeVisibility" src={isLayerVisible ? hideIcon : showIcon} />
    </S.VisibilityButton>
    <S.VisibilityTooltipContainer>
      <Tooltip content={isLayerVisible ? C.HIDE_TEXT : C.SHOW_TEXT} />
    </S.VisibilityTooltipContainer>
    <S.InfoButton data-cy="info-btn" onClick={onChangeInfo}>
      <S.InfoIcon alt="show description" src={infoIcon} />
    </S.InfoButton>
    <S.InfoTooltipContainer>
      <Tooltip content={C.INFO_TEXT} />
    </S.InfoTooltipContainer>
    <S.CollapseButton data-cy="collapse-btn" onClick={onChangeCollapse}>
      <S.CollapseIcon alt="change collapse" isAccordionOpen={isAccordionOpen} src={collapseIcon} />
    </S.CollapseButton>
    <S.CollapseTooltipContainer>
      <Tooltip content={isAccordionOpen ? C.COLLAPSE_TEXT : C.EXPAND_TEXT} />
    </S.CollapseTooltipContainer>
  </S.Wrapper>
);

Toolbar.propTypes = {
  isAccordionOpen: PropTypes.bool,
  isLayerVisible: PropTypes.bool,
  onChangeCollapse: PropTypes.func.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
  onChangeVisibility: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  isAccordionOpen: false,
  isLayerVisible: false,
};
