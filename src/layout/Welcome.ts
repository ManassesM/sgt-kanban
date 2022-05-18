import styled from 'styled-components'

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 500px;

  margin-bottom: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.blue[800]};
  p {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary.blue[800]};
  }

  span {
    font-size: 16px;
  }
`

export const Btn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.primary.blue[500]};
  border-radius: ${({ theme }) => theme.borderRadius};

  padding: 2rem 5rem;

  font-size: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary.blue[50]};

  background: ${({ theme }) => theme.colors.primary.blue[500]};

  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.02);
  }
`

export const Container = styled.div`
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  height: calc(100% - 100px);
`
