import { createContext, ReactNode, useContext, useState } from 'react'

interface INotification {
  title: string
  description: string
  status: 'error' | 'warning' | 'info' | 'success'
}

interface INotificationContext {
  toggleToast: INotification | null
  setToggleToast: (params: INotification | null) => void
}

interface INotificationProvider {
  children: ReactNode
}

export const NotificationContext = createContext({} as INotificationContext)

export const NotificationProvider = ({ children }: INotificationProvider) => {
  const [toggleToast, setToggleToast] = useState<INotification | null>(null)

  return (
    <NotificationContext.Provider value={{ toggleToast, setToggleToast }}>
      {children}
    </NotificationContext.Provider>
  )
}

// hook
export const useNotification = () => {
  const data = useContext(NotificationContext)
  return data
}
