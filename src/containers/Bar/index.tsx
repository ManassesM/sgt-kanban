import Modal from 'components/Modal'
import TasksForm from 'containers/Form/Task/Task'
import React, { useState } from 'react'
import * as S from './styles'

const Bar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.Container>
        <S.AddBtn onClick={() => setOpen(true)} />
        <S.SearchBtn />
      </S.Container>

      <Modal open={open} onClose={() => setOpen(false)}>
        <TasksForm onClose={setOpen} />
      </Modal>
    </>
  )
}

export default Bar
