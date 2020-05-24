import React from "react";
import './Test.scss'
import {connect} from "react-redux";
import TestsPage from "./TestsPage";
import {get5Tests, getUnits} from "../../Redux/tests-list-reducer";

class TestsPageContainer extends React.Component{
    componentDidMount() {
        this.props.getUnits();
    }
    render() {
      return <TestsPage {...this.props}/>
    }
}

let mapStateToProps = (state) =>({
    languages:state.testList.languages,
    isAuth:state.auth.isAuth,
    isTech: state.testList.isTech
});

export default connect(mapStateToProps,{getUnits, get5Tests})(TestsPageContainer);