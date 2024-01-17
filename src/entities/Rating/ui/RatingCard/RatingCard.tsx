import { memo, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Input } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
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
    <>
      <Text title={feedBackTitle} />
      <Input
        placeholder={t('Ваш отзыв')}
        onChange={setFeedback}
        value={feedback}
        data-testid="RatingCard.Input"
      />
    </>
  );

  return (
    <Card className={className} max data-testid="RatingCard">
      <VStack align="center" gap="8" max>
        <Text title={starsCount ? t('Спасибо за оценку!') : title} />
        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStars={starsCount}
        />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack max gap="32">
            {content}
            <Button onClick={acceptHandle} size={ButtonSize.L} fullwidth>
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {content}
            <HStack max gap="16" justify="end">
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={cancelHandle}
                data-testid="RatingCard.Close"
              >
                {t('Закрыть')}
              </Button>
              <Button onClick={acceptHandle} data-testid="RatingCard.Send">
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  );
});
