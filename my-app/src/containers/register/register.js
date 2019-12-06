import React from "react";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            pwd: "",
            comfirmpwd: "",
            type: ["Admin", "Visitor"], 
        }
    };
    render(){
        return (
            <form>
                <span><input onChange={value => this.handleChange("name", value)} placeholder="name" /></span>
                <span><input onChange={value => this.handleChange("pwd", value)} placeholder="password" /></span>
                <soan><input onChange={value => this.handleChange("comfirmpwd", value)} placeholder="comfirm password" /></soan>
                <select>
                    <option 
                        click={() => this.handleChange("type", "Admin")}
                        checked={this.state.type === "Admin"}
                    >
                        Admin
                    </option>
                    <option
                        click={() => this.handleChange("type", "Visitor")}
                        checked={this.state.type === "Visitor"}
                    >
                        Visitor
                    </option>
                </select>
                <button onClick={this.handleRegister.bind(this)}>Register</button>     
                <button onClick={this.handleLogin.bind(this)}>Login</button>   
            </form>
        )
    }
    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }
    handleRegister() {
        return true;
    }
    handleLogin() {
        this.props.history.push("/login");
    }
}

export default Register;