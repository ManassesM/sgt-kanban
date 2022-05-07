/* istanbul ignore file */

import { Card, MainBar, PriorityBar } from 'containers'
import Header from 'HOC/Header'
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

export default Header(Home)
