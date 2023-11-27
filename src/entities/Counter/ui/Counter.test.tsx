import { fireEvent, screen } from '@testing-library/react';

import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';

import { Counter } from './Counter';

describe('Counter TEST', () => {
  test('to be in Document', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('increment', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const btn = screen.getByTestId('increment-btn');
    fireEvent.click(btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('decrement', () => {
    ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    const btn = screen.getByTestId('decrement-btn');
    fireEvent.click(btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
