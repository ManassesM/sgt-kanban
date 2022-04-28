import styled from 'styled-components'

export const Btn = styled.button`
  width: 75px;
  height: 40px;
  padding: 5px;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.primary.blue[600]};

  color: ${({ theme }) => theme.colors.primary.blue[100]};
  font-weight: bold;

  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary.blue[700]};
  }
`
