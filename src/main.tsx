import React from 'react'
import ReactDOM from 'react-dom/client'

import { TransactionsProvider } from '@contexts/Transactions'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

import { GlobalStyles } from '@styles/global'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <App />
      </ThemeProvider>
    </TransactionsProvider>
  </React.StrictMode>,
)
