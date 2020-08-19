import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={SignUp} />
                <Route path='/' render={() => <div>404</div>} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
