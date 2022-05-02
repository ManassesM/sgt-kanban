import React from 'react'
import errors from 'utils/validation/errors.json'
import * as S from './styles'

interface InputErrorProps {
  type: string
  field: string
}

const InputError: React.FC<InputErrorProps> = ({ field, type }) => {
  return <S.Message>{errors[field][type]}</S.Message>
}

export default InputError
