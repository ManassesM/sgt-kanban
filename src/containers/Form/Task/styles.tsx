import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary.blue[50]};
  border: ${({ theme }) => theme.borderRadius};
  width: 300px;
  height: 500px;
`
