import React from 'react'
import * as S from './styles'

type Props = {
  type: 'submit' | 'reset' | 'button'
  text: string
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({ type, text, disabled = false, onClick }) => {
  return (
    <S.Btn disabled={disabled} type={type} onClick={onClick}>
      {text}
    </S.Btn>
  )
}

export default Button
