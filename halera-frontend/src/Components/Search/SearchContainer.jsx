import {connect} from "react-redux";
import {follow, unfollow} from "../../Redux/search-reducer";
import Search from "./Search";

let mapStateToProps  = (state) => {
    return {
        searchUserData:state.searchPage.searchUserData,
        searchProjectData:state.searchPage.searchProjectData
    }
};


const SearchContainer = connect(mapStateToProps, {follow, unfollow})(Search);

export default SearchContainer;