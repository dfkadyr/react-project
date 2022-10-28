import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from 'app/providers/error-boundary'
import { StoreProvider } from 'app/providers/store-provider'
import { ThemeProvider } from 'app/providers/theme-provider'

import 'shared/config/i18n/i18n'
import App from './app/App'

import 'app/styles/index.scss'

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
