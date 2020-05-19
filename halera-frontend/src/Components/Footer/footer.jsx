import React from "react";
import ReactDOM from 'react-dom';
import "./footer.scss"
import {NavLink} from "react-router-dom";
import {check_server_connection, render_net_stats, unable_https} from "../../Config";
import {global_url} from "../../common/GlobalScripts";

const isReachable = require('is-reachable');

let check_connection = (status_online, milliseconds, started, ended) => {
    let render_stats = () => {
        if (render_net_stats === true) {
            let http_status = () => {
                if (unable_https === true) {
                    return (<span className="badge badge-success">Enable</span>);
                } else {
                    return (<span className="badge badge-danger">Disabled</span>);
                }
            };
            return <span>&nbsp;Https:&nbsp;{http_status()}</span>
        }
    }
    if (check_server_connection === true) {
        started = new Date().getTime();
        (async () => {
            status_online = await isReachable(global_url);
            ended = new Date().getTime();
            milliseconds = ended - started;
            if (status_online === true) {
                console.log("Status: Online! Ping: " + milliseconds + " ms")
                if (render_net_stats === true) {
                    const server_online = <div className="data_server">Server:&nbsp;<span
                        className="badge badge-success">Online</span>&nbsp;Ping:&nbsp;<span
                        className="badge badge-info"> {milliseconds} ms</span>{render_stats()}</div>
                    ReactDOM.render(server_online, document.getElementById('data_server'));
                }
            } else {
                console.log("Status: Offline!")
                if (render_net_stats === true) {
                    const server_offline = <div className="data_server">Server:&nbsp;<span
                        className="badge badge-danger">Offline</span>{render_stats()}</div>
                    ReactDOM.render(server_offline, document.getElementById('data_server'));
                }
            }
        })();
    } else {
        console.log("Checking connection is disabled!")
    }
}


const Footer = (props) => {
    return (<div
            className="footer-copyright text-center py-3 footerlink white global_footer revealator-slideright revealator-once">©
            2020
            Copyright:
            <NavLink activeClassName="activeLink" to='/'> Halera Inc.</NavLink>
            <div id="data_server" className="stats_footer">
                {check_connection()}
            </div>
        </div>
    )
};
export default Footer;