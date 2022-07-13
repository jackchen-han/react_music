import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'

import HYAppFooter from 'components/app-footer'
import HYAppHeader from 'components/app-header'
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min'

const App = memo(() => {
  return (
    <HashRouter>
      <HYAppHeader/>
      { renderRoutes(routes)}
      <HYAppFooter/>
    </HashRouter>
  )
})

export default App