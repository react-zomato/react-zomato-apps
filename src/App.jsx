import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Restaurant, Login, Register, RestaurantDetail } from "./pages";
import { PrivateRoute } from "./components";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Register />
                    </Route>

                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
                <Switch>
                    <PrivateRoute exact path="/restaurant">
                        <Restaurant />
                    </PrivateRoute>
                    <Route exact path="/restaurant/:id">
                        <RestaurantDetail />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
