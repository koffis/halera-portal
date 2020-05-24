import React from "react";
import {connect} from "react-redux";
import TestTechnologies from "./TestTechnologies";


class TestTechnologiesContainer extends React.Component {
    render() {
        return (
           <TestTechnologies {...this.props}/>
        )
    }
}

let mapStateToProps = (state) =>({
    package: state.testList.package
});

export default connect(mapStateToProps,{})(TestTechnologiesContainer);