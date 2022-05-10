import React from 'react'
import { ITask } from 'utils/types'

import * as S from './styles'

interface Props {
  task: ITask
}

const Task: React.FC<Props> = ({ task }) => {
  return (
    <S.Container>
      <S.Circle priority={task.priority} />
      <p>{task.title}</p>
      <span>{task.description}</span>
    </S.Container>
  )
}

export default Task
