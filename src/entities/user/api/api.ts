import { baseApi } from '#shared/api'
import { getContributionsDaysCount, mapUser } from '../lib/mappers'
import { User } from '../model/types'
import { EventReponse, UserResponse } from './types'

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
      transformResponse: (response: UserResponse) => mapUser(response),
    }),
    getContributionsComboDaysCount: builder.query<number, string>({
      query: (userName) => ({
        url: `/users/${userName}/events`,
        method: 'GET',
      }),
      transformResponse: (response: EventReponse[]) =>
        getContributionsDaysCount(response),
    }),
  }),
})

export const { useGetUserQuery, useGetContributionsComboDaysCountQuery } =
  userApi
