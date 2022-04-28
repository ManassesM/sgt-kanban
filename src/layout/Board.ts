import styled from 'styled-components'

export const Board = styled.div`
  background: ${({ theme }) => theme.colors.primary.blue[100]};
  border-radius: ${({ theme }) => theme.borderRadius};

  margin: 15px;

  height: calc(100% - 105px);
`
