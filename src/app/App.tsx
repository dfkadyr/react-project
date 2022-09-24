import { Suspense } from 'react'
import { classNames } from 'shared/lib/class-names'
import { useTheme } from 'app/providers/theme-provider'
import { AppRouter } from 'app/router'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

import './styles/index.scss'

const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
