import {Provider} from 'react-redux'

import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'

import Apply from './components/Apply'
import Success from './components/Success'
import store from './redux/store'

import './App.css'

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
      <ProtectedRoute exact path="/apply" component={Apply} />
      <ProtectedRoute exact path="/success" component={Success} />
      <Route exact path="/not-found" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Provider>
)

export default App
