import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CheckLogin from "./components/checkLogin/checklogin";
import Login from "./containers/login/login";
import Register from "./containers/register/register";
import reducer from "./reducer";

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="react-lr">
                <CheckLogin />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
)