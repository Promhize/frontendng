import React from 'react'
import { Route, Switch } from 'react-router'

import FourOhFour from 'pages/FourOhFour'

const Routes = () => (
  <Switch>
    <Route path="/" component={FourOhFour} />
  </Switch>
)

export default Routes
