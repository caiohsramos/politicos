import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import Politicos from '../pages/politicos'
import About from '../pages/about'
import Quiz from '../quiz/quiz'

export default props => (
    <HashRouter>
        <Switch>
            <Route path='/politicos' component={Politicos} />
            <Route path='/about' component={About} />
            <Route path='/quiz' component={Quiz} /> 
            <Redirect from='*' to='/quiz' />
        </Switch>
    </HashRouter>
)