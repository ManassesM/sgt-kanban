import styled from 'styled-components'

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

export const SearchArea = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 5px;
`

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  svg {
    color: ${({ theme }) => theme.colors.primary.blue[700]};
    font-size: 35px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.03);
      color: ${({ theme }) => theme.colors.primary.blue[900]};
    }
  }
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
