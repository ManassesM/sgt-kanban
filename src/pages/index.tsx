/* istanbul ignore file */

import { getSession, useUser } from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'
import Router from 'next/router'
import React from 'react'

import * as S from 'layout/Welcome'

const Main: React.FC = () => {
  const { user } = useUser()

  return (
    <S.Container>
      <S.Btn onClick={() => Router.push('/api/auth/login')}>Log in</S.Btn>
      <S.Text>
        <p>Hello There!</p>
        <span>
          We don't have our own service for authentication yet. For this reason,
          we redirect our users to another page onwed and maintained by Auth0,
          where you can create your account with the most advanced security
          tools available on market.
        </span>
      </S.Text>
    </S.Container>
  )
}

export default Main

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = getSession(context.req, context.res)

  if (data?.user) {
    return {
      props: {},
      redirect: {
        destination: '/app',
      },
    }
  }
  return {
    props: {},
  }
}
