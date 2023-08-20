import classNames from 'classnames'

import React from 'react'

import { ILeaderBoard } from 'src/types/types'

import { LeaderBoardTable } from './components/LeaderBoardTable/LeaderBoardTable'

import styles from './LeaderBoard.module.css'

const leaderBoard: ILeaderBoard = {
  titles: [
    {
      title: 'A',
      name: 'Купить и продать',
    },
    {
      title: 'B',
      name: 'Разница во времени',
    },
    {
      title: 'C',
      name: 'Сломай палиндром',
    },
    {
      title: 'D',
      name: 'Повторяющееся число',
    },
  ],
  rows: [
    {
      participantInfo: {
        id: 108109264,
        name: 'qwerty (Ruslan Rasulov, Ярослав Старченков)',
        login: '',
        uid: null,
        startTime: null,
      },
      placeFrom: [1],
      placeTo: [1],
      score: '2',
      problemResults: [
        {
          submitDelay: 400,
          status: 'ACCEPTED',
          score: '',
          submissionCount: '3',
        },
        {
          submitDelay: 6313,
          status: 'NOT_ACCEPTED',
          score: '',
          submissionCount: '2',
        },
        {
          submitDelay: 0,
          status: 'NOT_SUBMITTED',
          score: '',
          submissionCount: '0',
        },
        {
          submitDelay: 0,
          status: 'NOT_SUBMITTED',
          score: '',
          submissionCount: '0',
        },
      ],
    },
    {
      participantInfo: {
        id: 108109264,
        name: 'qwerty (Ruslan Rasulov, Ярослав Старченков)',
        login: '',
        uid: null,
        startTime: null,
      },
      placeFrom: [2],
      placeTo: [2],
      score: '2',
      problemResults: [
        {
          title: 'A',
          name: 'Купить и продать',
          submitDelay: 400,
          status: 'ACCEPTED',
          score: '',
          submissionCount: '3',
        },
        {
          submitDelay: 6313,
          status: 'ACCEPTED',
          score: '',
          submissionCount: '2',
        },
        {
          submitDelay: 0,
          status: 'NOT_SUBMITTED',
          score: '',
          submissionCount: '0',
        },
        {
          submitDelay: 0,
          status: 'NOT_SUBMITTED',
          score: '',
          submissionCount: '0',
        },
      ],
    },
    {
      participantInfo: {
        id: 108109264,
        name: 'qwerty (Ruslan Rasulov, Ярослав Старченков)',
        login: '',
        uid: null,
        startTime: null,
      },
      placeFrom: [3],
      placeTo: [3],
      score: '2',
      problemResults: [
        {
          title: 'A',
          name: 'Купить и продать',
          submitDelay: 400,
          status: 'ACCEPTED',
          score: '',
          submissionCount: '3',
        },
        {
          submitDelay: 6313,
          status: 'ACCEPTED',
          score: '',
          submissionCount: '2',
        },
        {
          submitDelay: 0,
          status: 'NOT_SUBMITTED',
          score: '',
          submissionCount: '0',
        },
        {
          submitDelay: 0,
          status: 'NOT_SUBMITTED',
          score: '',
          submissionCount: '0',
        },
      ],
    },
  ],
}

export const LeaderBoardContainer = ({
  style,
}: {
  style: {
    display: string
  }
}) => {
  return (
    <div style={style} className={styles.LeaderBoardContainer}>
      <div className={styles.lastEventsWrapper}>
        <div className={styles.lastEventWrapper}>
          <span className={styles.lastEventTitle}>Последнее отправленное решение</span>
          <div className={styles.lastEventContent}>
            <span className={styles.lastEventTime}>04:59</span>
            <span className={classNames(styles.lastEventInfo, 'short')}>B, TeamSpirit</span>
          </div>
        </div>
        <div className={styles.lastEventWrapper}>
          <span className={styles.lastEventTitle}>Последний правильный ответ</span>
          <div className={styles.lastEventContent}>
            <span className={styles.lastEventTime}>04:59</span>
            <span className={classNames(styles.lastEventInfo, 'short')}>B, TeamSpirit</span>
          </div>
        </div>
      </div>
      <div className={styles.LeaderBoardTable}>
        <LeaderBoardTable leaderBoard={leaderBoard} />
      </div>
    </div>
  )
}