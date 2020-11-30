import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import {BrowserRouter} from 'react-router-dom'
import StoreProvider from './components/store/Provider'
import RoutesPrivate from './components/Routes/Private/Private'
import Favorites from './components/Favorites/Favorites'

const Routes = () => {
    return (
        <BrowserRouter>
          <StoreProvider>
              <Switch>
                  <Route exact path='/' component={Login}></Route>
                  <RoutesPrivate  path='/home' component={Home}/>
                  <RoutesPrivate  path='/favorites' component={Favorites}/>
                  <Redirect from='*' to='/'></Redirect>
              </Switch>
          </StoreProvider>
        </BrowserRouter>

    )
    
    
}

export default Routes