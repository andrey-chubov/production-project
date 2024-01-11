import { ReactElement } from 'react';

import { FeaturesFlags } from '@/shared/types/featuresFlags';

import { getFeaturesFlag } from '../setGetFeatures';

interface ToggleFeaturesProps {
  feature: keyof FeaturesFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = ({ feature, on, off }: ToggleFeaturesProps) => {
  if (getFeaturesFlag(feature)) {
    return on;
  }

  return off;
};
