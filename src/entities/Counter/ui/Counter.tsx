import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { counterAction } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const [t] = useTranslation();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterAction.increment());
  };
  const decrement = () => {
    dispatch(counterAction.decrement());
  };
  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button data-testid='increment-btn' onClick={increment}>{t('increment')}</Button>
      <Button data-testid='decrement-btn' onClick={decrement}>{t('decrement')}</Button>
    </div>
  );
};
