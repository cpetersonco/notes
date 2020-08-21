import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/HomePage'
import Login from './components/LoginPage'
import SignUp from './components/SignUpPage'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/' render={() => <div>404</div>} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
