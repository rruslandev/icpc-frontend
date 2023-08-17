import React, { FC, useContext } from 'react'

import { socket } from '@sockets/socket'

import { ProblemItemContext } from '@contexts/problemItemContext'

import { User } from '@icons/User'

import styles from './DefaultUserDropdown.module.css'

export const DefaultUserDropdown: FC = () => {
  const { problem } = useContext(ProblemItemContext)

  const onSendProblemAssigned = () => {
    socket.sendProblemAssigned({ user: null, problemAlias: problem.alias })
  }

  return (
    <button className={styles.defaultUserDropdown} onClick={onSendProblemAssigned}>
      <User width={29} height={29} color={'var(--color-black-typo-primary)'} />
    </button>
  )
}