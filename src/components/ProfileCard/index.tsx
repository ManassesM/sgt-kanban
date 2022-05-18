import React, { useState } from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { UserType } from 'pages/api/user'
import Router from 'next/router'

import * as S from './styles'

const list = [
  { key: '1', primary: 'texto 1', secondary: 'ManassesM' },
  { key: '2', primary: 'texto 11', secondary: 'text 22' },
]

interface ProfileCardProps {
  user?: UserType
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const handleClickLogout = () => Router.push('/api/auth/logout')

  return (
    <S.Card>
      <S.MUIListItem>
        <ListItemText primary="Signed in as ManassesM" />
      </S.MUIListItem>
      <S.Hr />
      <S.MUIListItem>
        <ListItemText primary="Total: 20" />
      </S.MUIListItem>
      <S.MUIListItem>
        <ListItemText primary="Anytime: 10" />
      </S.MUIListItem>
      <S.MUIListItem>
        <ListItemText primary="Do This Week: 5" />
      </S.MUIListItem>
      <S.MUIListItem>
        <ListItemText primary="Do Today: 3" />
      </S.MUIListItem>
      <S.MUIListItem>
        <ListItemText primary="ASAP: 2" />
      </S.MUIListItem>
      <S.Hr />
      <ListItem>
        <S.LogOutListArea onClick={handleClickLogout}>
          <LogoutIcon />
          <ListItemText primary="Log out" />
        </S.LogOutListArea>
      </ListItem>
    </S.Card>
  )
}

export default ProfileCard
