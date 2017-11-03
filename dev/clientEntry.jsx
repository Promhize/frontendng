import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'Routes'
import store from 'redux/store'

const renderApp = Component =>
  render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('fng-app'),
  )

renderApp(Routes)

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const NextApp = require('./Routes').default
    renderApp(NextApp)
  })
}
