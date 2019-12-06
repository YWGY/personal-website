import React from "react";
import Login from "./containers/login";
import Register from "./containers/register";

class App extends React.Component{
    render() {
        return (
            <div>
                <Login />
                <Register />
            </div>
        )
    }
}

export default App;