import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary.blue[50]};
  width: 100px;
  height: 50px;
  border: 1px solid red;
`
