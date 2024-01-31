import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedBackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedBackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0,
  } = props;

  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const isMobile = useDeviceDetect();

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <>
          <TextDeprecated title={feedBackTitle} />
          <InputDeprecated
            placeholder={t('Ваш отзыв')}
            onChange={setFeedback}
            value={feedback}
            data-testid="RatingCard.Input"
          />
        </>
      }
      on={
        <>
          <Text title={feedBackTitle} />
          <Input
            placeholder={t('Ваш отзыв')}
            onChange={setFeedback}
            value={feedback}
            data-testid="RatingCard.Input"
          />
        </>
      }
    />
  );

  const contentCard = (
    <>
      <VStack align="center" gap="8" max>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <>
              <Text title={starsCount ? t('Спасибо за оценку!') : title} />
              <StarRating
                size={40}
                onSelect={onSelectStars}
                selectedStars={starsCount}
              />
            </>
          }
          off={
            <>
              <TextDeprecated
                title={starsCount ? t('Спасибо за оценку!') : title}
              />
              <StarRatingDeprecated
                size={40}
                onSelect={onSelectStars}
                selectedStars={starsCount}
              />
            </>
          }
        />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack max gap="32">
            {content}
            <ToggleFeatures
              feature="isAppRedesigned"
              off={
                <ButtonDeprecated
                  onClick={acceptHandle}
                  size={ButtonSize.L}
                  fullwidth
                >
                  {t('Отправить')}
                </ButtonDeprecated>
              }
              on={
                <Button onClick={acceptHandle} size="l" fullwidth>
                  {t('Отправить')}
                </Button>
              }
            />
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {content}
            <ToggleFeatures
              feature="isAppRedesigned"
              off={
                <HStack max gap="16" justify="end">
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={cancelHandle}
                    data-testid="RatingCard.Close"
                  >
                    {t('Закрыть')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    onClick={acceptHandle}
                    data-testid="RatingCard.Send"
                  >
                    {t('Отправить')}
                  </ButtonDeprecated>
                </HStack>
              }
              on={
                <HStack max gap="16" justify="end">
                  <Button
                    variant="outline"
                    onClick={cancelHandle}
                    data-testid="RatingCard.Close"
                  >
                    {t('Закрыть')}
                  </Button>
                  <Button onClick={acceptHandle} data-testid="RatingCard.Send">
                    {t('Отправить')}
                  </Button>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      )}
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <CardDeprecated className={className} max data-testid="RatingCard">
          {contentCard}
        </CardDeprecated>
      }
      on={
        <Card
          className={className}
          max
          data-testid="RatingCard"
          padding="24"
          border="round"
        >
          {contentCard}
        </Card>
      }
    />
  );
});
