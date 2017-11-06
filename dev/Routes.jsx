import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import FourOhFour from 'pages/FourOhFour'

const Routes = () => (
  <Switch>
    <Route path="/404" component={FourOhFour} />
    <Route path="/" render={() => <Redirect to="/404" />} />
  </Switch>
)

export default Routes
