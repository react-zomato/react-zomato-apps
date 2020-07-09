import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DetailsRestaurants } from "./pages";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(logger, thunk))}>
            <Router>
                <Switch>
                    <Route exact path="/restaurant">
                        <DetailsRestaurants />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
