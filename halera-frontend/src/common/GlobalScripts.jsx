import {connect_ip, connect_port, unable_https} from "../Config";


let html_protocol
if (unable_https === true) {
    html_protocol = "https://"
    console.log("https enabled")
    console.log("Run server with: set HTTPS=true&&npm start")
} else{
    html_protocol = "http://"
    console.log("https disabled")
}

/*Other*/
export const global_ip = connect_ip + ":" + connect_port;
export const global_url = html_protocol + global_ip + "/api/v1/";
export const global_way = global_ip + "/api/v1/";
