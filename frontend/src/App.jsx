import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        {/* Public routes */}
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
      </Switch>
    </>
  )
}

export default App


