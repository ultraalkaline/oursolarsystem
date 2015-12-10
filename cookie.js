// c_name = cookie name
// c_value = cookie value
// ex_min = expiration in minutes
function setCookie(c_name, c_value, ex_min) {
    var d = new Date();
    d.setTime(d.getTime() + (ex_min*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = c_name + "=" + c_value + "; " + expires;
}

