import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterAction } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
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
