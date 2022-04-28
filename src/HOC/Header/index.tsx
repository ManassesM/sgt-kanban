import { Popover } from '@mui/material'
import ProfileCard from 'components/ProfileCard'
import React, { useState } from 'react'
import * as S from './styles'

const HOCHeader: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <S.Barra>
      <S.Logo>
        <p>SGT</p>
      </S.Logo>
      <div>
        <S.Profile onClick={() => setOpen(true)}>
          <img src="https://github.com/ManassesM.png" alt="" />
        </S.Profile>
        <Popover
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{ top: '58px', left: '-30px' }}
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
