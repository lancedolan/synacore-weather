/**
 * @author Lance Dolan
 * 7/21/2016
 *
 * For Synacore Weather App.
 *
 * Very rudimentary async HTTP GET utility
 * written specifically for the weather app
 * test, since external dependencies and libraries are forbidden.
 *
 */

//namespaces
var com = com || {};
com.synacore = com.synacore || {};
com.synacore.weather = com.synacore.weather || {};

/**
 * Call an HTTP GET endpoint and execute some functions upon success or failure.
 *
 * @param {String} endpoint Fully qualified URL to an endpoint
                    which accepts GET requests.
 * @param {function} success The function to be called
                    when 200 response is received
 * @param {function} fail The function to be called when
                    anything goes wrong. Error handling is simplistic
                    in this rudimentary solution.
 */
com.synacore.weather.get = function(endpoint , success , fail) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        try {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    success(
                        JSON.parse(xhttp.responseText) , xhttp.responseText
                    );
                } else {
                    fail();
                }
            }
        } catch (e) {
            console.error('Failed to kick off async request to ' + endpoint);
            console.error(e);
            fail();
        }
    };
    xhttp.open('GET', endpoint, true);
    xhttp.send();

}
