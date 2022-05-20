import { Popover } from '@mui/material'
import { useUser } from '@auth0/nextjs-auth0'
import ProfileCard from 'components/ProfileCard'
import { UserType } from 'pages/api/user'
import React, { MouseEvent, useState } from 'react'
import * as S from './styles'

interface HeaderProps {
  user?: UserType
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const { user: userAuth } = useUser()
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <S.Barra>
      <S.Logo>
        <p>SGT</p>
      </S.Logo>
      {userAuth ? (
        <>
          <S.Profile onClick={handleClick}>
            <img src={user?.image} alt={user?.name} />
          </S.Profile>
          <Popover
            sx={{ top: '5px' }}
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <ProfileCard user={user} />
          </Popover>
        </>
      ) : null}
    </S.Barra>
  )
}

export default Header
