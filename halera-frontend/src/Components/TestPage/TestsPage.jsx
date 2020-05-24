import React from "react";
import './Test.scss'
import Preloader from "../../common/Preloader/Preloader";
import UnitItemContainer from "./UnitItem";
import {Redirect} from "react-router-dom";

const TestsPage = (props) => {
    if (!props.languages) {
        return (
            <Preloader/>
        )
    }

    let unitsArray = props.languages.units.map(u => <UnitItemContainer
        key={u.id}
        name={u.name}
        items={u.items}
        get5Tests={props.get5Tests}
        isTech={props.isTech}
    />);

    if(props.isAuth === false) return <Redirect to={'/login'}/>;

    return (
       <div>
           <h4 className="text-center">Please pass that tests</h4>
          {unitsArray}
       </div>
    )
};

export default TestsPage;