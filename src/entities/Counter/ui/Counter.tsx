import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/deprecated/Button';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const [t] = useTranslation();
  const counterValue = useCounterValue();
  const { increment, decrement, addFive } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  const handleAdd = () => {
    addFive(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={handleIncrement}>
        {t('increment')}
      </Button>
      <Button data-testid="addFive-btn" onClick={handleAdd}>
        {t('addFive')}
      </Button>
      <Button data-testid="decrement-btn" onClick={handleDecrement}>
        {t('decrement')}
      </Button>
    </div>
  );
};
