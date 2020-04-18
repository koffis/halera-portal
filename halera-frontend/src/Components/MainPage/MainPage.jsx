import React from 'react';
import {NavLink} from "react-router-dom";
import './MainPage.scss'
import cloud1 from './images/cloud1.png'
import cloud2 from './images/cloud2.png'
import cloud3 from './images/cloud3.png'
import cloud4 from './images/cloud4.png'
import cloud5 from './images/cloud5.png'


const MainPage = (props) => {
    return(<div>
            {/*MAINLOGO*/}
            <div className="mainBanner">
                <div className="revealator_slideup revealatoronce mainText">HALERA
                    <div className="revealator_slideup revealatoronce ">
                        <p>Enim facilisis gravida neque convallis a cras semper auctor</p>
                        <div className="subText">
                            <div className="text"></div>
                            <div className="button">Start now</div>
                        </div>
                    </div>
                </div>
                <div className="clouds">
                    <img src={cloud1} className="animate1"/>
                    <img src={cloud2} className="animate2"/>
                    <img src={cloud3} className="animate3"/>
                    <img src={cloud4} className="animate4"/>
                    <img src={cloud5} className="animate5"/>
                </div>
            </div>
            {/*MAINCONTENT*/}
            <div className="maincontent">
                <div className="container text-center">
                    <div className="revealator_slideright revealatoronce revealator_delay1">
                        liquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque
                    </div>
                </div>
            </div>
            {/*FOOTER*/}
        <div className="revealator_slideright revealatoronce ">
            <footer>

                <div className="container">

                    <div className="row text-center d-flex justify-content-center pt-5 mb-3 footerlink">

                        <div className="col-md-2 mb-3">
                                <NavLink activeClassName="activeLink" to='/profile'>Profile</NavLink>
                        </div>

                        <div className="col-md-2 mb-3">
                                <NavLink activeClassName="activeLink" to='/team'>Team</NavLink>
                        </div>
                        <div className="col-md-2 mb-3">
                                <NavLink activeClassName="activeLink" to='/search'>Search</NavLink>
                        </div>
                        <div className="col-md-2 mb-3">
                                <NavLink activeClassName="activeLink" to='/login'>Log in</NavLink>
                        </div>

                        <div className="col-md-2 mb-3">
                                <NavLink activeClassName="activeLink" to='/login'>Test</NavLink>
                        </div>


                    </div>

                    <hr className="rgba-white-light"/>


                    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">


                        <div className="col-md-8 col-12 mt-5">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem
                                accusantium doloremque laudantium, totam rem
                                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt
                                explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                quia consequuntur.</p>
                        </div>


                    </div>

                    <hr className="clearfix d-md-none rgba-white-light"/>


                    <div className="row text-center">


                        <div className="col-md-12">

                            <div className="mb-5 flex-center footerlink">

                                <a href="#">
                                    <i className="fab fa-facebook-f fa-lg  mr-4"> </i>
                                </a>

                                <a href="#">
                                    <i className="fab fa-twitter fa-lg  mr-4"> </i>
                                </a>

                                <a href="#">
                                    <i className="fab fa-google-plus-g fa-lg  mr-4"> </i>
                                </a>

                                <a href="#">
                                    <i className="fab fa-linkedin-in fa-lg t mr-4"> </i>
                                </a>

                                <a href="#">
                                    <i className="fab fa-instagram fa-lg  mr-4"> </i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-pinterest fa-lg "> </i>
                                </a>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="footer-copyright text-center py-3 footerlink">© 2020 Copyright:
                    <NavLink activeClassName="activeLink" to='/'> Halera Inc.</NavLink>
                </div>
            </footer>
        </div>
        </div>

    )
};

export default MainPage;
