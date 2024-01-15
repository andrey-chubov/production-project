import { FeaturesFlags } from '../../types/featuresFlags';

let featuresFlags: FeaturesFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeaturesFlags): void {
  if (newFeatureFlags) {
    featuresFlags = newFeatureFlags;
  }
}

export function getFeaturesFlag(flag: keyof FeaturesFlags) {
  return featuresFlags?.[flag];
}
