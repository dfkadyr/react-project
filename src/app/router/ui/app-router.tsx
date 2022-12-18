import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routeConfig } from '@/app/router/config/route-config'
import { RequireAuth } from '@/app/router/ui/require-auth'
import { AppRoutesProps } from '@/shared/types/router'
import { PageLoader } from '@/widgets/page-loader'

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    )
  }, [])

  return (
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  )
})
