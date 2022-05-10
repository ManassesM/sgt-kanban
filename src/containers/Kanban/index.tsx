import { Painel } from 'layout/Painel'
import React from 'react'
import tasks from 'mock/tasks.json'
import { priorities } from 'containers/PriorityBar'
import Tasks from 'components/Tasks'

import * as S from './styles'
import { ITask } from 'utils/types'

const Kanban: React.FC = () => {
  const prior1: ITask[] = tasks.filter((task) => task.priority === 1)
  const prior2: ITask[] = tasks.filter((task) => task.priority === 2)
  const prior3: ITask[] = tasks.filter((task) => task.priority === 3)
  const prior4: ITask[] = tasks.filter((task) => task.priority === 4)

  return (
    <Painel>
      <S.Column>
        <Tasks tasks={prior1} />
      </S.Column>
      <S.Column>
        <Tasks tasks={prior2} />
      </S.Column>
      <S.Column>
        <Tasks tasks={prior3} />
      </S.Column>
      <S.Column>
        <Tasks tasks={prior4} />
      </S.Column>
    </Painel>
  )
}

export default Kanban
