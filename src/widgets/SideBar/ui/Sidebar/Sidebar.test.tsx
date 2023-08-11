import { fireEvent, screen } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar TEST', () => {
  test('with no have param', () => {
    renderWithTranslation(<Sidebar />);
    const btn = screen.getByTestId('toggleBtn');
    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
  // test('with one param', () => {
  //   render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
  //   expect(screen.getByText('Test')).toHaveClass('clear');
  // });
});
