import { useNotification } from 'contexts/NotificationContext'
import React, { useEffect } from 'react'

import * as S from './styles'

const Toast: React.FC = () => {
  const { toggleToast, setToggleToast } = useNotification()

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleToast(null)
    }, 3000)

    return () => clearInterval(interval)
  }, [toggleToast, setToggleToast])

  return (
    toggleToast && (
      <S.Container>
        <S.Toast status={toggleToast?.status || 'error'}>
          <p>{toggleToast?.title || 'error'}</p>
          <span>
            {toggleToast?.description ||
              'Something went wrong with the feedback feature.'}
          </span>
        </S.Toast>
      </S.Container>
    )
  )
}

export default Toast
