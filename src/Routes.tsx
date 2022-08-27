import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Refreshable } from 'react-router-refreshable'

import Country from './pages/Country'
import Home from './pages/Home'

const Routes = () => (
  <Refreshable>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/countries/:param' component={Country} />
    </Switch>
  </Refreshable>
)

export default Routes
