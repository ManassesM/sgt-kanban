/* istanbul ignore file */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { SnackbarProvider } from 'notistack'
import { UserType } from './api/user'
import { Header } from 'containers'
import { UserProvider } from '@auth0/nextjs-auth0'

interface MyAppProps extends AppProps {
  user?: UserType
}

function App({ Component, pageProps, user }: MyAppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Kanban Board</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="Kanban"
          content="A project for my personal portfolio. It consists of a kanban board."
        />
      </Head>
      <UserProvider>
        <SnackbarProvider
          autoHideDuration={3000}
          disableWindowBlurListener={true}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          maxSnack={3}
        >
          <GlobalStyles />
          <Header user={user} />
          <Component {...pageProps} />
        </SnackbarProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App

App.getInitialProps = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/user`)

  const user = await data.json()

  return { user }
}
