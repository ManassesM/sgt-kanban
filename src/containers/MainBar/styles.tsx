import AddBoxIcon from '@mui/icons-material/AddBox'
import SearchIcon from '@mui/icons-material/Search'
import styled, { css } from 'styled-components'

// base style
const Btn = css`
  color: ${({ theme }) => theme.colors.primary.blue[700]};
  font-size: 35px;

  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.03);
    color: ${({ theme }) => theme.colors.primary.blue[900]};
  }
`

export const AddBtn = styled(AddBoxIcon)`
  ${Btn};
`

export const SearchBtn = styled(SearchIcon)`
  ${Btn};
  width: 50px;
`

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.primary.blue[50]};

  color: ${({ theme }) => theme.colors.primary.blue[600]};
  font-weight: 600;
  font-size: 14px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};

  width: 300px;
  height: 25px;

  margin-left: 10px;
  padding: 10px 5px;
`

export const Search = styled.div`
  position: absolute;
  right: 10px;

  display: flex;
  justify-content: right;
  align-items: center;
  gap: 5px;

  background: ${({ theme }) => theme.colors.primary.blue[100]};
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const Container = styled.div`
  position: relative;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.primary.blue[200]};

  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};

  height: 50px;
`
