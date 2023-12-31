import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { Statement } from '@widgets/ProblemSpaceInfo/components/Statement/Statement'

export const StatementContainer = () => {
  const { trainingSessionId, alias } = useParams()

  const { data: statement } = useQuery(['statement', alias], () => api.getProblemStatement(trainingSessionId, alias))

  if (!statement) return null

  return <Statement statement={statement} />
}
