import { TextField } from '@mui/material'
import styled from 'styled-components'

export const Input = styled(TextField)`
  color: 'error';
`

export const Title = styled.label`
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary.blue[700]};
  font-size: 15px;
  font-weight: 600;
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 15px 0px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary.blue[50]};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 300px;
  height: auto;
  padding: 20px 0;
`
