import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';

import { FeaturesFlags } from '../../../types/featuresFlags';

let featuresFlags: FeaturesFlags = {
  isAppRedesigned:
    localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

export function setFeatureFlags(newFeatureFlags?: FeaturesFlags): void {
  if (newFeatureFlags) {
    featuresFlags = newFeatureFlags;
  }
}

export function getFeaturesFlag(flag: keyof FeaturesFlags) {
  return featuresFlags?.[flag];
}
export function getAllFeaturesFlags() {
  return featuresFlags;
}
