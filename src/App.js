import {BrowserRouter as Router, Switch} from "react-router-dom";
import routes from "./routes/MainRouter";
import RouteHandler from "./routes/RouteHandler"
import configureStore from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'

export default function App() {
    const {store, persistor} = configureStore();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Switch>
                        {routes.map(r =>
                            <RouteHandler path={r.path} component={r.component} />
                        )}
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}
