import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { urls } from '@constants/urls'
import { getCookie } from '@helpers/getCookie'
import { setCookie } from '@helpers/setCookie'

import { IContest, ISubmissionFull, IYandexUser } from 'src/types/types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: urls.openApiUrl,
    prepareHeaders: headers => {
      const urlParams = new URLSearchParams(window.location.hash)
      const accessToken = urlParams.get('#access_token')

      if (accessToken) {
        const expiresIn = urlParams.get('expires_in')
        setCookie('access_token', accessToken, expiresIn)
        headers.set('Authorization', `OAuth ${accessToken}`)
      } else {
        if (!document.cookie || !document.cookie.includes('access_token')) {
          window.location.replace(urls.yandexPassport)
        } else {
          const token = getCookie('access_token')
          if (token) {
            headers.set('Authorization', `OAuth ${token}`)
          }
        }
      }

      return headers
    },
  }),
  endpoints: build => ({
    getCurrentUser: build.query<IYandexUser, void>({
      query: () => ({
        url: 'user/me',
      }),
    }),
    getControlUser: build.query<{ userId: string }, string>({
      query: trainingSessionId => ({
        url: `/training-sessions/${trainingSessionId}/control/current`,
      }),
    }),
    getSubmissionFull: build.query<ISubmissionFull, { trainingSessionId: string; submissionId: number }>({
      query: ({ trainingSessionId, submissionId }) => ({
        url: `/training-sessions/${trainingSessionId}/submissions/${submissionId}/full`,
      }),
    }),
    getContests: build.query<IContest[], void>({
      query: () => ({
        url: 'contests',
      }),
    }),
  }),
})

export const {
  useGetCurrentUserQuery: useGetCurrentUserQuery,
  useGetControlUserQuery,
  useGetSubmissionFullQuery,
  useGetContestsQuery,
} = api
