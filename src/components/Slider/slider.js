import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './slider.style';

export const Slider = ({

  max,
  min,
}) => {
  const [minDate, setMinDate] = useState(2001);
  const [maxDate, setMaxDate] = useState(2017);

  return (
    <S.Container>
      {/* onChange={onChangeRange}  */}
      <S.MaxCounter maxDate={maxDate}>
        {maxDate}
      </S.MaxCounter>
      <S.MinCounter minDate={minDate}>
        {minDate}
      </S.MinCounter>
      <S.InputLeft
        id="input-left"
        max={max}
        min={min}
        maxDate={maxDate}
        minValue={minDate}
        onChange={(e) => setMinDate(e.target.value)}
        type="range"
        value={minDate}
      />
      <S.InputRight
        id="input-right"
        max={max}
        maxDate={maxDate}
        minDate={minDate}
        min={min}
        onChange={(e) => setMaxDate(e.target.value)}
        type="range"
        value={maxDate}
      />
      <S.Slider>
        <S.Track />
        <S.Range
          maxDate={maxDate}
          minDate={minDate}
        />
        <S.ThumbLeft
          maxDate={maxDate}
          minDate={minDate}
        />
        <S.ThumbRight
          maxDate={maxDate}
          minDate={minDate}
        />
      </S.Slider>
    </S.Container>
  );
};

Slider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
};

Slider.defaultProps = {
  max: 100,
  min: 0,
};
