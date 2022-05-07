/* istanbul ignore file */
import { NotificationProvider } from 'contexts/NotificationContext'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
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
      <NotificationProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default App
