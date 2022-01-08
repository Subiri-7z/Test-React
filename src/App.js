import {BrowserRouter as Router, Switch} from "react-router-dom";
import routes from "./routes/MainRouter";
import RouteHandler from "./routes/RouteHandler"

export default function App() {
    return (
        <Router>
            <Switch>
                {routes.map(r =>
                    <RouteHandler path={r.path} component={r.component} />
                )}
            </Switch>
        </Router>
    );
}
