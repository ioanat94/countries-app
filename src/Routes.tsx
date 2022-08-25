import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Country from './pages/Country'
import Home from './pages/Home'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/countries/:id' component={Country} />
  </Switch>
)

export default Routes
