import AddBoxIcon from '@mui/icons-material/AddBox'
import SearchIcon from '@mui/icons-material/Search'
import styled, { css } from 'styled-components'

// base style
const Btn = css`
  color: ${({ theme }) => theme.colors.primary.blue[700]};
  font-size: 35px;

  cursor: pointer;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.03);
  }
`

export const AddBtn = styled(AddBoxIcon)`
  ${Btn};
`

export const SearchBtn = styled(SearchIcon)`
  ${Btn};
`

export const Container = styled.div`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.primary.blue[200]};

  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};

  height: 50px;
`
