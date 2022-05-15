import { Modal as UIModal } from '@mui/material'
import styled from 'styled-components'

export const Close = styled.div`
  svg {
    position: absolute;
    right: 15px;
    top: 15px;

    color: ${({ theme }) => theme.colors.primary.blue[700]};
    font-size: 30px;

    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.02);
    }
  }
`

export const Wrap = styled.div`
  position: relative;
`

export const Modal = styled(UIModal)`
  display: flex;
  justify-content: center;
  align-items: center;
`
