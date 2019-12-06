import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

@withRouter
class CheckLogin extends React.Component{
    componentDidMount() {
        //check user can complete the task or not
        if(filterCheck.indexOf(this.props.location.pathname) > -1) {
            return;
        }
        axios.get("/user/info")
        .then(res => {
            if(res.status === 200) {
                if(res.data.code === 0){
                }else{
                this.props.history.push("/login");
            }
        }})
    }
    render() {
        return null;
    }
}

export default CheckLogin;