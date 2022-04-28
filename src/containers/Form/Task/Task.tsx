import { TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Button from 'components/Button'
import React from 'react'
import * as S from './styles'

const TasksForm: React.FC = ({ onClose }: any) => {
  const [value, setValue] = React.useState<Date | null>(null)

  return (
    <S.Container>
      <S.Title>Create a Task</S.Title>
      <S.Wrapper>
        <S.Input
          autoFocus
          helperText="Please enter the title"
          label="Title"
          variant="outlined"
          InputProps={{ style: { fontSize: 12 } }}
          InputLabelProps={{ style: { fontSize: 12 } }}
        />
        <S.Input
          helperText="Please enter the description"
          label="Description"
          variant="outlined"
          InputProps={{ style: { fontSize: 12 } }}
          InputLabelProps={{ style: { fontSize: 12 } }}
        />
        <S.Input
          helperText="Please enter the priority. It must be a number between 1 and 4"
          label="Priority"
          variant="outlined"
          inputProps={{ inputMode: 'numeric', pattern: '[1-4]*' }}
          InputProps={{ style: { fontSize: 12 } }}
          InputLabelProps={{ style: { fontSize: 12 } }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Final Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                InputProps={{ style: { fontSize: 12 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
              />
            )}
          />
        </LocalizationProvider>
      </S.Wrapper>
      <Button onClick={() => onClose(false)} text="CREATE" />
    </S.Container>
  )
}

export default TasksForm
