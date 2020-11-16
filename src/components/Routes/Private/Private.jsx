import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import StoreContext from '../../store/Context'

const RoutesPrivate = ({component: Component, ...rest}) => {
    const {token} = useContext(StoreContext)

    return (
        <Route {...rest} render={(props)=> token 
            ? <Component {...rest}/>
            : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        } />
    )
}

export default RoutesPrivate