import { ListItem as MUIListItem } from '@mui/material/'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import styled from 'styled-components'

export const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.primary.blue[100]};
  border-radius: ${({ theme }) => theme.borderRadius};

  width: 80%;

  margin: 5px auto;
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

export const ListItemIcon = styled(FiberManualRecordIcon)`
  /* border: 1px solid purple; */
`

export const LogOutListArea = styled(MUIListItem)`
  gap: 5px;

  width: 100px;
  margin: 10px 0 5px 10px;
  padding: 0 13px;

  svg,
  p,
  span {
    color: ${({ theme }) => theme.colors.primary.blue[50]};
    font-size: 14px;
  }

  background: ${({ theme }) => theme.colors.primary.red[300]};
  border-radius: ${({ theme }) => theme.borderRadius};

  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.red[400]};
  }
`

export const ListItem = styled(MUIListItem)`
  display: flex;
  align-items: center;
  gap: 5px;

  p,
  span {
    color: ${({ theme }) => theme.colors.primary.blue[50]};
    font-size: 14px;
  }

  transition: all 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.blue[800]};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  svg {
    &:hover {
      background: ${({ theme }) => theme.colors.primary.red[400]};
    }
  }
`

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.primary.blue[700]};

  width: 165px;
  height: auto;

  border: 1px solid ${({ theme }) => theme.colors.primary.blue[50]};
  border-radius: ${({ theme }) => theme.borderRadius};

  padding: 6px 10px;
`
