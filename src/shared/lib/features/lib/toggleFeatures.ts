import { getFeaturesFlag } from './setGetFeatures';
import { FeaturesFlags } from '../../../types/featuresFlags';

interface ToggleFeaturesOptions<T> {
  name: keyof FeaturesFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeatures<T>({
  name,
  on,
  off,
}: ToggleFeaturesOptions<T>): T {
  if (getFeaturesFlag(name)) {
    return on();
  }

  return off();
}
