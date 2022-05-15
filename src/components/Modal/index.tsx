import React, { ReactElement } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import * as S from './styles'

type Props = {
  open: boolean
  onCloseModal: () => void
  children: ReactElement
}

const Modal: React.FC<Props> = ({ open, onCloseModal, children }) => {
  return (
    <S.Modal open={open} onClose={onCloseModal}>
      <S.Wrap>
        <S.Close onClick={onCloseModal}>
          <CloseIcon />
        </S.Close>
        {children}
      </S.Wrap>
    </S.Modal>
  )
}

export default Modal
