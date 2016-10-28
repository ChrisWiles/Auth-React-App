import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import routes from './routes'
import './index.css'

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
)

render(
  <App />,
  document.getElementById('root')
)
