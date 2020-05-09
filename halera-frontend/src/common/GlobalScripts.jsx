/*
import {check_mobile_enable, check_server_connection, dark_theme_enable, global_url, global_way, maintenance_mode_enable, unable_https} from "../Config";
import {isMobile} from "react-device-detect";
import Error from "../Components/404/404";
import dark from "./globalDark.component.scss";
import React from "react";


let html_protocol
if (unable_https === true) {
    html_protocol = "https://"
    console.log("https enabled")
    console.log("Run server with: set HTTPS=true&&npm start")
} else{
    html_protocol = "http://"
    console.log("https disabled")
}
if (check_mobile_enable === true) {
    if (maintenance_mode_enable === true) {

        return <div className="text_mobile">Site is closed!</div>

    } else if (isMobile) {
        return <div className="text_mobile">Use computer please!</div>
    }
}
if (maintenance_mode_enable === true) {

    return <div className="text_mobile">Site is closed!</div>

}
if (check_server_connection === true) {


    function ping(host, port, pong, ReferenceError) {

        let started = new Date().getTime();

        let http = new XMLHttpRequest();
        console.log("Checking server connection with " + global_url)
        http.open("GET", "http://" + global_way, /!*async*!/true);

        http.onreadystatechange = function () {
            if (http.readyState === 4) {

                let ended = new Date().getTime();

                let milliseconds = ended - started;

                if (pong != null) {
                    pong(milliseconds);

                }
            } else {
                console.log("Connected!")
            }
            if (Error) {
                console.log("Connection failed!!")
            }
        };

        try {
            http.send(null);

        }  catch (error) {
            console.error(error);

        }

    }


    ping()
}
else {console.log("Checking connection disabled")}


let css = dark;
if (dark_theme_enable === true) {
    return (
        <React.Fragment>
        <style>{css}</style>
        </React.Fragment>
);
}
export const global_protocol = html_protocol
export const global_protocol = html_protocol
export const global_protocol = html_protocol
export const global_protocol = html_protocol
*/
