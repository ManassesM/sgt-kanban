import { Popover } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Profile = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.primary.blue[50]};
  border-radius: 50px;
  cursor: pointer;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }

  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.02);
  }
`

export const PfpPopover = styled(Popover)``

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 55px;
  width: 113px;
  border: 3px solid ${({ theme }) => theme.colors.primary.blue[50]};

  P {
    color: ${({ theme }) => theme.colors.primary.blue[50]};
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 3px;
  }
`

export const Barra = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  height: 75px;
  padding: 10px 25px;
  background: ${({ theme }) => theme.colors.primary.blue[700]};
`
