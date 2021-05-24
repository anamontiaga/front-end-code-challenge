import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Toolbar } from './toolbar';

test('showing expand text when accordion is closed', () => {
  const isAccordionOpen = false,

    component = render(<Toolbar isAccordionOpen={isAccordionOpen} />)
  component.getByText('Expand layer')
})

test('showing hide text when layer is visible', () => {
  const isLayerVisible = true,

    component = render(<Toolbar isLayerVisible={isLayerVisible} />)
  component.getByText('Hide layer')
})

test('clicking the button call event handler once', () => {
  const mockHandler = jest.fn()
  const component = render(<Toolbar onChangeCollapse={mockHandler} />)
  const button = component.getByAltText('change collapse')
  fireEvent.click(button)
  expect(mockHandler).toHaveBeenCalledTimes(1)
})
