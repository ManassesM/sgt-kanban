import * as yup from 'yup'

const number = /^[1-4]$/ // matches number between 1 and 4

export const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
  priority: yup.string().matches(number),
  date: yup.string().required(),
})
