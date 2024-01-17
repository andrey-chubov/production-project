import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button TEST', () => {
  test('with no have param', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('with one param', () => {
    render(<Button variant="clear">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
