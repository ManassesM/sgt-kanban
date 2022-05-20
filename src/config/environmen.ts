type Environment = 'live' | 'dev'

export const baseURL =
  (process.env.BASE_URL as Environment) || 'https://sgt-kanban.vercel.app'
