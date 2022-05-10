import styled from 'styled-components'

export const Circle = styled.div<{ priority: number }>`
  position: absolute;
  right: 10px;
  top: 10px;

  width: 15px;
  height: 15px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary.green[300]};

  background: ${({ theme, priority }) =>
    priority === 2 && theme.colors.primary.blue[300]};

  background: ${({ theme, priority }) =>
    priority === 3 && theme.colors.primary.yellow[300]};

  background: ${({ theme, priority }) =>
    priority === 4 && theme.colors.primary.red[300]};
`

export const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.primary.blue[50]};

  width: 40rem;
  min-height: 15rem;

  border-radius: ${({ theme }) => theme.borderRadius};

  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.01);
  }
`
