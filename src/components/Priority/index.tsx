import React from 'react'

import * as S from './styles'

interface IPriority {
  title: string
}

const Priority: React.FC<IPriority> = ({ title }) => {
  return (
    <S.Container>
      <p>{title}</p>
      <S.Btn>
        <S.AddButton />
      </S.Btn>
    </S.Container>
  )
}

export default Priority
