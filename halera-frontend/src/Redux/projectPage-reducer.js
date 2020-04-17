import projectIcon from '../common/Images/projectIcon.jpg'
import member from '../common/Images/member.png'

let initialState = {
   projectData:{
       projectID: 69,
       projectImage: projectIcon,
       projectName: 'Halera project',
       projectStatus: 'ongoing',
       searchTeam: true,
       members:{
           Frontend:{userName:'dog', profileImg:member},
           Backend:{userName:'useless', profileImg:member},
           Designer:{userName:'ira', profileImg:member},
           TeamLead:{userName:'maxnomad', profileImg:member},
           IOS:{userName:'olehcon', profileImg:member}
       },
       profileInfo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit. Ultrices neque ornare aenean euismod elementum nisi. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Amet justo donec enim diam vulputate ut pharetra. Adipiscing diam donec adipiscing tristique risus nec. Turpis cursus in hac habitasse platea dictumst quisque. Mattis vulputate enim nulla aliquet. Nunc congue nisi vitae suscipit tellus mauris a. Quam nulla porttitor massa id. Purus viverra accumsan in nisl nisi. Habitant morbi tristique senectus et netus et malesuada fames. Tempor nec feugiat nisl pretium fusce id velit ut. In aliquam sem fringilla ut morbi tincidunt augue interdum. Morbi quis commodo odio aenean sed. Mauris vitae ultricies leo integer malesuada nunc vel. Adipiscing bibendum est ultricies integer quis auctor elit. Amet est placerat in egestas erat imperdiet sed euismod nisi.\n' +
           '\n' +
           '                Leo duis ut diam quam. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Et malesuada fames ac turpis egestas. Metus aliquam eleifend mi in nulla. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Cursus sit amet dictum sit amet justo donec enim diam. Amet nulla facilisi morbi tempus iaculis urna id. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Integer eget aliquet nibh praesent tristique magna sit. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. In eu mi bibendum neque egestas congue quisque. Sit amet tellus cras adipiscing enim eu. Arcu odio ut sem nulla pharetra diam sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Et egestas quis ipsum suspendisse ultrices gravida dictum. Scelerisque fermentum dui faucibus in ornare.'
   }
};


const projectPageReducer = (state = initialState, action) => {
    return state;
};


export default projectPageReducer;