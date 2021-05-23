import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import PropTypes from 'prop-types';
import * as S from './slider.style';

export const Slider = ({ step }) => {
  const MIN = 0;
  const MAX = 20;
  const [values, setValues] = useState([1, 20]);
  return (
    <S.Wrapper>
      <Range
        values={values}
        step={step}
        min={MIN}
        max={MAX}
        onChange={(val) => {
          console.log(val);
          setValues(val);
        }}
        renderTrack={({ props, children, style }) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...style,
              height: '10px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '3px',
                width: '100%',
                background: getTrackBackground({
                  values,
                  colors: ['#CCCCCC', '#CAB2D6', '#CCCCCC'],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              alignItems: 'center',
              backgroundColor: 'transparent',
              height: '42px',
              display: 'flex',
              justifyContent: 'center',
              width: '42px',
            }}
          >
            <S.Thumb />
          </div>
        )}
      />
    </S.Wrapper>
  );
};

Slider.propTypes = {
  onMouseDown: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  ref: PropTypes.shape({}).isRequired,
  step: PropTypes.number.isRequired,
  style: PropTypes.shape({}).isRequired,
};
