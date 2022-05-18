/* istanbul ignore file */

import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Card, MainBar, PriorityBar } from 'containers'
import { Board } from 'layout/Board'
import React from 'react'

const Home: React.FC = () => {
  return (
    <Board>
      <MainBar />
      <PriorityBar />
      <Card />
    </Board>
  )
}

export default Home

export const getServerSideProps = withPageAuthRequired()
