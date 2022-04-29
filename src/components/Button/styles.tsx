import styled from 'styled-components'

export const Btn = styled.button<{ disabled: boolean }>`
  min-width: 100px;
  height: 40px;
  padding: 5px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.primary.blue[600]};

  font-weight: bold;
  color: ${({ theme, disabled }) =>
    disabled ? '#ffffff' : theme.colors.primary.blue[100]};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  background: ${({ disabled }) => disabled && '#a5a5a5'};

  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    background: ${({ theme, disabled }) =>
      !disabled && theme.colors.primary.blue[700]};
  }
`
