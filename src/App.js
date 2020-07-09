import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RestaurantDetail from "./components/pages/detailrestaurants/RestaurantDetail";

import store from "./components/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/restaurants/:id">
                        <RestaurantDetail />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
