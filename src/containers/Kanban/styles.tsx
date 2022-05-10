import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;

  /* scrollbar */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 5px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.blue[200]};
  }
`
