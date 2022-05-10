import Task from 'components/Task'
import React from 'react'
import { ITask } from 'utils/types'

import * as S from './styles'

interface Props {
  tasks: ITask[]
}

const Tasks: React.FC<Props> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks
