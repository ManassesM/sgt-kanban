import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'

export const AddButton = styled(AddIcon)``

export const Btn = styled.div`
  position: absolute;

  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.3);
  }

  right: 10px;
  top: 5px;

  svg {
    color: ${({ theme }) => theme.colors.primary.blue[900]};
    font-size: 20px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  p {
    color: ${({ theme }) => theme.colors.primary.blue[700]};
    font-weight: bold;
    font-size: 14px;
  }
`
