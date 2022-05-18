import { NextApiRequest, NextApiResponse } from 'next'

const data = {
  id: '123',
  name: 'ManassesM',
  email: 'mana@email.com',
  image: 'https://github.com/ManassesM.png',
}

export type UserType = typeof data

const getUser = (req: NextApiRequest, res: NextApiResponse<UserType>) => {
  return res.status(200).json(data)
}

export default getUser
