import styled from 'styled-components'

export const Toast = styled.div<{ status: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35rem;
  height: 7rem;

  padding: 10px;

  background: ${({ theme, status }) =>
    status === 'error' && theme.colors.primary.red[600]};
  background: ${({ theme, status }) =>
    status === 'info' && theme.colors.primary.blue[600]};
  background: ${({ theme, status }) =>
    status === 'success' && theme.colors.primary.green[600]};

  color: ${({ theme }) => theme.colors.primary.blue[50]};

  overflow: hidden;

  p {
    font-size: 20px;
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }

  border-radius: ${({ theme }) => theme.borderRadius};
`

export const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 9999;
`
