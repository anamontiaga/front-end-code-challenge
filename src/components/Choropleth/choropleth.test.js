import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Choropleth } from './choropleth';

test('renders content', () => {
  const items = [
    {
      color: "#FFFFFF",
      name: "T h i s  i s  a  t e s t"
    },
    {
      color: "#C0F09C",
      name: "1 h"
    },
  ],

    component = render(<Choropleth items={items} />)
  expect(component.container).toHaveTextContent('Thisisatest');
})
