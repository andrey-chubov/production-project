import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/deprecated/Popups';

import { Country } from '../../model/types/Country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazahstan, content: Country.Kazahstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );
  return (
    <ListBox
      className={classNames('', {}, [className])}
      label={t('Укажите страну')}
      value={value}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top left"
      defaultValue={t('Укажите страну')}
    />
  );
});
