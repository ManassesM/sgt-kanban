import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@mui/material'
import Button from 'components/Button'
import InputError from 'components/InputError'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { getDefaultValues, ITask } from 'utils/defaultValues'
import { validationSchema } from 'utils/validation/validation'
import * as S from './styles'

interface IProps {
  task?: ITask
  onClose: (_: boolean) => void
}

const TasksForm: React.FC<IProps> = ({ onClose, task }) => {
  const defaultValues = getDefaultValues(task)

  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  })

  function handleSubmitTask(formData: ITask) {
    console.log(formData)
  }

  return (
    <S.Container onSubmit={handleSubmit(handleSubmitTask)}>
      <S.Wrapper>
        <S.Title>Create a Task</S.Title>
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
              {errors?.title?.type && (
                <InputError type={errors.title.type} field="title" />
              )}
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
              {errors?.description?.type && (
                <InputError
                  type={errors.description.type}
                  field="description"
                />
              )}
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
                inputProps={{ inputMode: 'numeric', pattern: '[1-4]*' }}
                InputProps={{ style: { fontSize: 20 } }}
                InputLabelProps={{ style: { fontSize: 20 } }}
              />
              {errors?.priority?.type && (
                <InputError type={errors.priority.type} field="priority" />
              )}
            </>
          )}
        />

        <Controller
          name="date"
          control={control}
          defaultValue={getValues('title')}
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                {...register('date')}
                onChange={onChange}
                value={value}
                type="date"
                InputProps={{ style: { fontSize: 20 } }}
                InputLabelProps={{ style: { fontSize: 20 } }}
              />
              {errors?.date?.type && (
                <InputError type={errors.date.type} field="date" />
              )}
            </>
          )}
        />

        <S.BtnWrapper>
          <Button type="submit" text="CREATE" />
          <Button
            type="button"
            onClick={() => onClose(false)}
            text="CANCELAR"
          />
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  )
}

export default TasksForm
