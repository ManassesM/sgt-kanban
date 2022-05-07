import Priority from 'components/Priority'
import { Container } from 'layout/Container'
import React from 'react'

import * as S from './styles'

const priorities = [
  { key: 'normal', title: 'Whenever' },
  { key: 'week', title: 'Do This Week' },
  { key: 'day', title: 'Do Today' },
  { key: 'asap', title: 'ASAP' },
]

const PriorityBar: React.FC = () => {
  return (
    <>
      <S.Baue>
        {priorities.map((priority) => (
          <S.Container key={priority.key}>
            <Priority title={priority.title} />
          </S.Container>
        ))}
      </S.Baue>
    </>
  )
}

export default PriorityBar
