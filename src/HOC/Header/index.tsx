import { Popover } from '@mui/material'
import ProfileCard from 'components/ProfileCard'
import React, { MouseEvent, useState } from 'react'
import * as S from './styles'

const HOCHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <S.Barra>
      <S.Logo>
        <p>SGT</p>
      </S.Logo>
      <div>
        <S.Profile onClick={handleClick}>
          <img src="https://github.com/ManassesM.png" alt="" />
        </S.Profile>
        <Popover
          sx={{ top: '5px' }}
          open={open}
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
          <ProfileCard />
        </Popover>
      </div>
    </S.Barra>
  )
}

const Header = (Component: React.ComponentType<any>) => {
  const MyComponent = (props: any) => (
    <>
      <HOCHeader />
      <Component {...props} />
    </>
  )

  return MyComponent
}

export default Header
