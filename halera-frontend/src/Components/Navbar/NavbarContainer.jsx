import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {logout} from "../../Redux/auth-reducer";

class NavbarContainer extends React.Component{
    render() {
        return (
            <Navbar {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    username: state.auth.username
});

export default connect(mapStateToProps, {logout})(NavbarContainer);