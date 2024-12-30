import { RootState } from '#app/redux'
import { BASE_API_URL } from '#shared/lib/consts.ts'
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react'
import queryString from 'query-string'

const rawBaseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  paramsSerializer: (params) =>
    queryString.stringify(params, { arrayFormat: 'comma' }),
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState
    const token = state.gitHubWidget.token

    if (token) headers.set('Authorization', 'Bearer ' + token)

    return headers
  },
})

const clearParams = (
  params: Record<string, string | number | boolean>,
): Record<string, string | number | boolean> => {
  const result: Record<string, string | number | boolean> = {}

  for (const paramsKey in params) {
    if (
      params[paramsKey] ||
      params[paramsKey] === 0 ||
      params[paramsKey] === false
    ) {
      result[paramsKey] = params[paramsKey]
    }
  }

  return result
}

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  object,
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  let adjustedParams = typeof args === 'string' ? undefined : args.params

  if (typeof adjustedParams === 'object') {
    adjustedParams = clearParams(adjustedParams)
  }

  const adjustedArgs =
    typeof args === 'string' ? args : { ...args, params: adjustedParams }
  // provide the amended url and other params to the raw base query
  return rawBaseQuery(adjustedArgs, api, extraOptions)
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
})
