import Modal from 'components/Modal'
import TasksForm from 'containers/Form/Task'
import React, { useState } from 'react'
import * as S from './styles'

const Bar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const hadnleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <S.Container>
        <S.AddBtn onClick={() => setOpen(true)} />
        <S.Search>
          <S.Input type="text" />
          <S.SearchBtn onClick={() => setIsOpenSearch(!isOpenSearch)} />
        </S.Search>
      </S.Container>

      <Modal open={open} onCloseModal={hadnleClose}>
        <TasksForm onCloseModal={hadnleClose} />
      </Modal>
    </>
  )
}

export default Bar
