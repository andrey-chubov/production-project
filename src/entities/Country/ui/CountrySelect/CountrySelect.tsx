import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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
  const prop = {
    className,
    label: t('Укажите страну'),
    value,
    items: options,
    onChange: onChangeHandler,
    readonly,
    direction: 'top left' as const,
    defaultValue: t('Укажите страну'),
  };
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...prop} />}
      off={<ListBoxDeprecated {...prop} />}
    />
  );
});
