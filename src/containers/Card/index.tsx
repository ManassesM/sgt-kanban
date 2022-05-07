import { Kanban } from 'layout/Kanban'
import React from 'react'

import * as S from './styles'

const Card: React.FC = () => {
  return (
    <Kanban>
      <S.Container>card</S.Container>
    </Kanban>
  )
}

export default Card
