import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@mui/material'
import Button from 'components/Button'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { getDefaultValues } from 'utils/defaultValues'
import { ITask } from 'utils/types'
import { validationSchema } from 'utils/validation/validation'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import * as S from './styles'

interface IProps {
  task?: ITask
  onCloseModal: () => void
}

const TasksForm: React.FC<IProps> = ({ onCloseModal, task }) => {
  const defaultValues = getDefaultValues(task)
  const [value, setValue] = useState<Date | null>(null)

  const { enqueueSnackbar } = useSnackbar()

  const { control, register, handleSubmit, getValues } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  })

  function handleSubmitTask(formData: ITask) {
    console.log(formData)

    onCloseModal()
    enqueueSnackbar('You have just created a new task!', {
      variant: 'success',
    })
  }

  function onInvalid() {
    enqueueSnackbar("Either you missed a mandatory field or it's invalid!", {
      variant: 'error',
    })
  }

  return (
    <S.Container onSubmit={handleSubmit(handleSubmitTask, onInvalid)}>
      <S.Wrapper>
        <S.Title>Create Task</S.Title>

        <Controller
          name="title"
          control={control}
          defaultValue={getValues('title')}
          render={({ field: { onChange, value } }) => (
            <>
              <S.Input
                {...register('title')}
                onChange={onChange}
                value={value}
                autoFocus
                label="title"
                variant="outlined"
                InputProps={{ style: { fontSize: 20 } }}
                InputLabelProps={{ style: { fontSize: 20 } }}
              />
            </>
          )}
        />

        <Controller
          name="description"
          control={control}
          defaultValue={getValues('description')}
          render={({ field: { onChange, value } }) => (
            <>
              <S.Input
                {...register('description')}
                onChange={onChange}
                value={value}
                label="description"
                variant="outlined"
                InputProps={{ style: { fontSize: 20 } }}
                InputLabelProps={{ style: { fontSize: 20 } }}
              />
            </>
          )}
        />

        <Controller
          name="priority"
          control={control}
          defaultValue={getValues('priority')}
          render={({ field: { onChange, value } }) => (
            <>
              <S.Input
                {...register('priority')}
                onChange={onChange}
                value={value}
                label="priority"
                variant="outlined"
                InputProps={{ style: { fontSize: 20 } }}
                InputLabelProps={{ style: { fontSize: 20 } }}
              />
            </>
          )}
        />

        <Controller
          name="date"
          control={control}
          defaultValue={getValues('date')}
          render={({ field: { onChange, value } }) => (
            <>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value}
                  InputProps={{ style: { fontSize: 20 } }}
                  onChange={onChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </>
          )}
        />

        <S.BtnWrapper>
          <Button type="submit" text="CREATE" />
          <Button type="button" onClick={onCloseModal} text="CANCELAR" />
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  )
}

export default TasksForm
