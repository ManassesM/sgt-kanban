import React, { ReactElement } from 'react'
import * as S from './styles'

type Props = {
  open: boolean
  onClose: (_: boolean) => void
  children: ReactElement
}

const Modal: React.FC<Props> = ({ open, onClose, children }) => {
  return (
    <S.Modal open={open} onClose={onClose}>
      <S.Wrap>
        <S.Close onClick={() => onClose(false)} />
        {children}
      </S.Wrap>
    </S.Modal>
  )
}

export default Modal
