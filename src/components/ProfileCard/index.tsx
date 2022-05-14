import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import ListItemText from '@mui/material/ListItemText'

import * as S from './styles'

const ProfileCard: React.FC = () => {
  return (
    <S.Card>
      <S.ListItem>
        <ListItemText primary="Signed in as ManassesM" />
      </S.ListItem>
      <S.Hr />
      <S.ListItem>
        <ListItemText primary="Total: 20" />
      </S.ListItem>
      <S.ListItem>
        <ListItemText primary="Anytime: 10" />
      </S.ListItem>
      <S.ListItem>
        <ListItemText primary="Do This Week: 5" />
      </S.ListItem>
      <S.ListItem>
        <ListItemText primary="Do Today: 3" />
      </S.ListItem>
      <S.ListItem>
        <ListItemText primary="ASAP: 2" />
      </S.ListItem>
      <S.Hr />
      <S.LogOutListArea>
        <LogoutIcon />
        <ListItemText primary="Log out" />
      </S.LogOutListArea>
    </S.Card>
  )
}

export default ProfileCard
