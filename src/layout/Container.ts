import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.primary.blue[200]};

  height: 50px;
`
