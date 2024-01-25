import { rtkApi } from '@/shared/api/rtkApi';
import { FeaturesFlags } from '@/shared/types/featuresFlags';

interface UpdateFeatureFlagOptions {
  userId: string;
  features: Partial<FeaturesFlags>;
}

const featureFlagApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    updateFeatureFlag: builder.mutation<void, UpdateFeatureFlagOptions>({
      query: ({ userId, features }: UpdateFeatureFlagOptions) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          features,
        },
      }),
    }),
  }),
});

export const updateFeatureFlagMutation =
  featureFlagApi.endpoints.updateFeatureFlag.initiate;
