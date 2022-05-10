import React from 'react'
import Priority from 'components/Priority'

import * as S from './styles'

export const priorities = [
  { key: 'normal', title: 'Anytime' },
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
