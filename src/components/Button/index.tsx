import React from 'react'
import * as S from './styles'

type Props = {
  text: string
  onClick: () => void
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return <S.Btn onClick={onClick}>{text}</S.Btn>
}

export default Button
