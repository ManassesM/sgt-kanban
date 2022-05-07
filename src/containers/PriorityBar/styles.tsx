import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  width: 40rem;
  height: 3rem;

  background: ${({ theme }) => theme.colors.primary.blue[50]};
  border-radius: ${({ theme }) => theme.borderRadius};

  /* top: 2rem; */
`
export const Baue = styled.div`
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
