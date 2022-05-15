import React, { useState } from 'react'

import AddBoxIcon from '@mui/icons-material/AddBox'
import SearchIcon from '@mui/icons-material/Search'

import { Container } from 'layout/Container'
import TasksForm from 'containers/Form/Task'
import Modal from 'components/Modal'

import * as S from './styles'

const Bar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const hadnleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Container>
        <S.Bar>
          <AddBoxIcon onClick={() => setOpen(true)} />

          <S.SearchArea>
            <S.Input type="text" />
            <SearchIcon />
          </S.SearchArea>
        </S.Bar>
      </Container>

      <Modal open={open} onCloseModal={hadnleClose}>
        <TasksForm onCloseModal={hadnleClose} />
      </Modal>
    </>
  )
}

export default Bar
