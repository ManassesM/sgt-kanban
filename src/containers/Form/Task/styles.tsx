import { TextField } from '@mui/material'
import styled from 'styled-components'

export const Input = styled(TextField)`
  color: 'error';
`

export const Title = styled.label`
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary.blue[700]};
  font-size: 25px;
  font-weight: 600;
`

export const BtnWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 15px 0px;
`

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary.blue[50]};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: auto;
  height: auto;
  padding: 15px 30px;
`
