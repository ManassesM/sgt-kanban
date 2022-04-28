import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'
import * as S from './styles'

const ProfileCard: React.FC = () => {
  return (
    <S.Card>
      <S.ProfileInfo>
        <p>Signed in as</p>
        <span>ManassesM</span>
      </S.ProfileInfo>
      <S.Hr />
      <div>
        <S.Info>
          <p>Total:</p>
          <span>20</span>
        </S.Info>
        <S.Info>
          <p>Livre:</p>
          <span>10</span>
        </S.Info>
        <S.Info>
          <p>Normal:</p>
          <span>5</span>
        </S.Info>
        <S.Info>
          <p>Atenção:</p>
          <span>3</span>
        </S.Info>
        <S.Info>
          <p>Urgente:</p>
          <span>2</span>
        </S.Info>
      </div>
      <S.Hr />
      <S.Logout>
        <LogoutIcon />
        <p>Log out</p>
      </S.Logout>
    </S.Card>
  )
}

export default ProfileCard
