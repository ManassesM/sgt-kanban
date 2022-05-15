import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import * as S from './styles'

const ProfileCard: React.FC = () => {
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
        <S.LogOutListArea>
          <LogoutIcon />
          <ListItemText primary="Log out" />
        </S.LogOutListArea>
      </ListItem>
    </S.Card>
  )
}

export default ProfileCard
