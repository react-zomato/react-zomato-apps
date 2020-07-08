import React from 'react';
import reducers from './Redux/Reducers/Form'
import {Signup, Login} from './Pages/Form'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function All() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <BrowserRouter>
      <Switch>
        <Route path='/register'>
    <div className="App">
        <Signup/>
    </div>
    </Route>
    <Route path='/login'>
    <div className="App">
        <Login/>
    </div>
    </Route>
    </Switch>
    </BrowserRouter>
    </Provider>

  );
}

export default All;
