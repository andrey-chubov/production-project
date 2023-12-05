import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetProfileRating {
  profileId: string;
  userId: string;
}

interface ProfileRating extends GetProfileRating {
  rate: number;
  feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileRating: builder.query<Rating[], GetProfileRating>({
      query: ({ profileId, userId }) => ({
        url: '/profile-ratings',
        params: {
          profileId,
          userId,
        },
      }),
    }),
    profileRating: builder.mutation<void, ProfileRating>({
      query: (arg) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useProfileRating = profileRatingApi.useProfileRatingMutation;
