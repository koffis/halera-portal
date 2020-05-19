import avatar from "../common/Images/user.png";
import proj from '../common/Images/project.png'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    searchUserData: [
        {name: "Yaroslav Kravchenko", userName: "koffis", followed: false, profileImage: avatar, project: 'Halera'},
        {name: "Maxim Guminenko", userName: "maxnomad", followed: true, profileImage: avatar, project: 'Sosy hui'},
        {name: "Roma Haker", userName: "korostos", followed: false, profileImage: avatar, project: 'LNU'},
        {name: "Tanya Gnomiha", userName: "marvdraloh", followed: false, profileImage: avatar, project: 'Shahta'},
        {name: "Oleg Konotopenko", userName: "olehcon", followed: true, profileImage: avatar, project: 'rozvodim koney nedorogo'},
        {name: "Yuriy Shpala", userName: "deD0ed", followed: true, profileImage: avatar, project: 'Pubg mobile'},
        {name: "Pavlo Yarosniy", userName: "drochila", followed: true, profileImage: avatar, project: 'c#'}
    ],
    searchProjectData: [
        {projectName: "Halera", projectID: "17", projectImage: proj, projectStatus: 'ongoing', searchTeam: true},
        {projectName: "Shahta", projectID: "12", projectImage: proj, projectStatus: 'cloded', searchTeam: false},
        {projectName: "Pubg mobile", projectID: "3", projectImage: proj, projectStatus: 'ongoing', searchTeam: false},
        {projectName: "LNU", projectID: "32", projectImage: proj, projectStatus: 'cloded', searchTeam: true},
        {projectName: "Preved", projectID: "235", projectImage: proj, projectStatus: 'in plan', searchTeam: true},
        {projectName: "Ya proekt", projectID: "4636", projectImage: proj, projectStatus: 'closed', searchTeam: false},
        {projectName: "ha ha ha", projectID: "421", projectImage: proj, projectStatus: 'in plan', searchTeam: true}],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                searchUserData: state.searchUserData.map(u => {
                    if (u.userName === action.userName) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                searchUserData: state.searchUserData.map(u => {
                    if (u.userName === action.userName) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        default:
            return state;
    }
};


export const follow = (userName) => ({type: FOLLOW, userName});
export const unfollow = (userName) => ({type: UNFOLLOW, userName});


export default searchReducer;
