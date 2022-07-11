import { screen } from '@testing-library/react';
import { App } from '.';
import { renderTheme } from '../../styles/render-theme';

it('should test', () => {
  renderTheme(<App />);
  expect(screen.getAllByRole('heading')).toMatchSnapshot();
});
