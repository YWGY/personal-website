import React from "react";

class Login extends React.Component{
    render() {
        return(
            <div className="login-page">
                <form>
                    <input placeholder="name" type="text">name</input>
                    <input placeholder="password" type="text">password</input>
                    <button onSubmit={this.handleLogin.bind(this)} type="primary">Login</button>
                    <button onClick={this.handleRegister.bind(this)} type="primary">Register</button>
                </form>
            </div>
        )
    }
    handleLogin() {
        return true;
    }
    handleRegister() {
        this.props.history.push("/register");
    }
};

export default Login;