import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import PropTypes from 'prop-types';
import { Color } from 'styles/theme';
import * as S from './slider.style';

export const Slider = ({
  maxDateFormat, minDateFormat, onChangeDate, step,
}) => {
  const MIN = parseInt(minDateFormat, 10);
  const MAX = parseInt(maxDateFormat, 10);
  const [values, setValues] = useState([2004, 2014]);
  return (
    <>
      <Range
        min={MIN}
        max={MAX}
        onChange={(val) => {
          setValues(val);
          onChangeDate(val);
        }}
        step={step}
        values={values}
        renderTrack={({
          props, children, style, onMouseDown, onTouchStart,
        }) => (
          <S.SliderWrapper
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            style={style}
          >
            <S.SliderBar
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values,
                  colors: [`${Color.neutral.silver}`, `${Color.slider}`, `${Color.neutral.silver}`],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </S.SliderBar>
          </S.SliderWrapper>
        )}
        renderThumb={({ props }) => (
          <S.ThumbTouchArea
            {...props}
            data-cy="thumb-touch-area"
            style={props.style}
          >
            <S.Thumb />
          </S.ThumbTouchArea>
        )}
      />
      <S.ValuesWrapper>
        {values.map((valueItem) => (
          <S.ValueLegend>{valueItem}</S.ValueLegend>
        ))}
      </S.ValuesWrapper>
    </>
  );
};

Slider.propTypes = {
  maxDateFormat: PropTypes.number.isRequired,
  minDateFormat: PropTypes.number.isRequired,
  onChangeDate: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  ref: PropTypes.shape({}).isRequired,
  step: PropTypes.number.isRequired,
  style: PropTypes.shape({}).isRequired,
};
