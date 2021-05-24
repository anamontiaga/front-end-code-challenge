import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { Slider } from 'components/Slider/slider';
import * as S from './timeline.style';

export const Timeline = ({ onChangeDate, timeline }) => {
  const {
    dateFormat, maxDate, minDate, step,
  } = timeline;
  const dateFormatLowercase = dateFormat.toLowerCase();
  const maxDateFormat = format(new Date(maxDate), dateFormatLowercase);
  const minDateFormat = format(new Date(minDate), dateFormatLowercase);

  return (
    <S.Wrapper>
      <Slider
        maxDateFormat={maxDateFormat}
        minDateFormat={minDateFormat}
        step={step}
        onChangeDate={onChangeDate}
      />
    </S.Wrapper>
  );
};

Timeline.propTypes = {
  onChangeDate: PropTypes.func.isRequired,
  timeline: PropTypes.shape({
    dateFormat: PropTypes.string.isRequired,
    maxDate: PropTypes.string.isRequired,
    minDate: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
};
