/*cards const*/
export const def_max_cards_prj = 4
export const def_max_cards_ach = 5
export const def_max_cards_prj_mem = 4

/*theme settings*/ /*not working*/
export const dark_theme_enable = false

/*Site settings*/
export const check_mobile_enable = true
export const maintenance_mode_enable = false
export const check_server_connection = false
export const unable_https = false


/*Main page social links */
export const facebook_main_link = "#"
export const twitter_main_link = "#"
export const google_plus_main_link = "#"
export const linkedin_main_link = "#"
export const instagram_main_link = "#"
export const pinterest_main_link = "#"


/*Connect*/
export const connect_ip = "localhost"
export const connect_port = "5050"

/*Scripts*/
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



