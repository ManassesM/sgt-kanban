import styled from 'styled-components'

export const Hr = styled.hr`
  border: 1px dotted ${({ theme }) => theme.colors.primary.blue[50]};
  border-radius: ${({ theme }) => theme.borderRadius};

  width: 80%;

  margin: 5px 0;
`

export const Info = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
  font-size: 15px;

  p {
    font-weight: bold;
  }
`

export const Logout = styled.button`
  background: ${({ theme }) => theme.colors.primary.red[300]};
  border-radius: ${({ theme }) => theme.borderRadius};

  display: flex;
  align-items: center;
  gap: 3px;

  margin-top: 10px;
  padding: 3px 5px;
  width: 70%;

  color: ${({ theme }) => theme.colors.primary.blue[50]};
  line-height: 12px;
  border: none;

  cursor: pointer;

  p {
    font-size: 13px;
    font-weight: bold;
  }
  svg {
    font-size: 20px;
  }

  transition: all 0.2s ease-in;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.red[400]};
  }
`

export const ProfileInfo = styled.section`
  p {
    font-size: 13px;
  }
  span {
    font-size: 15px;
    font-weight: bold;
  }
`

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.primary.blue[700]};

  width: 150px;
  height: 215px;

  border: 1px solid ${({ theme }) => theme.colors.primary.blue[50]};
  border-radius: ${({ theme }) => theme.borderRadius};

  padding: 6px 10px;
  color: ${({ theme }) => theme.colors.primary.blue[50]};
`
