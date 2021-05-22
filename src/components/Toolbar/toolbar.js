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
  isAccordionOpen, isLayerVisible, onChangeCollapse, onChangeInfo, onChangeVisibility,
}) => (
  <S.Container>
    <S.VisibilityButton onClick={onChangeVisibility}>
      <S.VisibilityIcon alt="changeVisibility" src={isLayerVisible ? hideIcon : showIcon} />
    </S.VisibilityButton>
    <S.InfoButton onClick={onChangeInfo}>
      <S.InfoIcon alt="show description" src={infoIcon} />
    </S.InfoButton>
    <S.CollapseButton onClick={onChangeCollapse}>
      <S.CollapseIcon alt="change collapse" isAccordionOpen={isAccordionOpen} src={collapseIcon} />
    </S.CollapseButton>
    <S.TooltipContainer>
      <Tooltip content={isAccordionOpen ? C.COLLAPSE_TEXT : C.EXPAND_TEXT} />
    </S.TooltipContainer>
  </S.Container>
);

Toolbar.propTypes = {
  isAccordionOpen: PropTypes.func.isRequired,
  isLayerVisible: PropTypes.func.isRequired,
  onChangeCollapse: PropTypes.func.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
  onChangeVisibility: PropTypes.func.isRequired,
};
