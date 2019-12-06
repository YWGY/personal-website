import React from "react";
import {withRouter} from "react-router-dom";

@withRouter
class CheckLogin extends React.Component{
    componentDidMount() {
        //check user can complete the task or not
        axios.get("xxxxx")
        .then(res => {
            if(res.status === 200) {
                if(res.data.code === 0)
            }else {
                this.props.history.push(/Login);
            }
        })
    }
    render() {
        return null;
    }
}

export default CheckLogin;