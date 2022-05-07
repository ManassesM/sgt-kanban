/* istanbul ignore file */
import Bar from 'containers/Bar'
import Card from 'containers/Card'
import Header from 'HOC/Header'
import { Board } from 'layout/Board'
import React from 'react'

const Home: React.FC = () => {
  return (
    <Board>
      <Bar />
      <Card />
    </Board>
  )
}

export default Header(Home)
