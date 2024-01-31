import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeaturesFlags } from '@/shared/types/featuresFlags';

import { updateFeatureFlagMutation } from '../api/featureFlagApi';
import { getAllFeaturesFlags, setFeatureFlags } from '../lib/setGetFeatures';

interface UpdateFeatureFlagOptions {
  userId: string;
  newFeatures: Partial<FeaturesFlags>;
}

export const updateFeatureFlag = createAsyncThunk<
  void,
  UpdateFeatureFlagOptions,
  ThunkConfig<string>
>('features/updateFeatureFlag', async ({ userId, newFeatures }, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;

  const allFeatures = {
    ...getAllFeaturesFlags(),
    ...newFeatures,
  };

  try {
    await dispatch(
      updateFeatureFlagMutation({
        userId,
        features: {
          ...getAllFeaturesFlags(),
          ...newFeatures,
        },
      }),
    );

    setFeatureFlags(allFeatures);
    window.location.reload();

    return undefined;
  } catch (error) {
    return rejectWithValue('error');
  }
});
