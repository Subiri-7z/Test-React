import { Route } from 'react-router'

function RouteHandler({component: Component, path}) { 
    return (
        <Route exact path={path}>
            <Component/>
        </Route>
    );
}

export default RouteHandler;