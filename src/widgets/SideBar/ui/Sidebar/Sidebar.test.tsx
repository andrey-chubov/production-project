import { fireEvent, screen } from '@testing-library/react';

import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar TEST', () => {
  test('with no have param', () => {
    ComponentRender(<Sidebar />, { initialState: { counter: { value: 10 } } });
    const btn = screen.getByTestId('toggleBtn');
    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
  // test('with one param', () => {
  //   render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
  //   expect(screen.getByText('Test')).toHaveClass('clear');
  // });
});
