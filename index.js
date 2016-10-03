//namespaces
var com = com || {};
com.synacore = com.synacore || {};
com.synacore.weather = com.synacore.weather || {};

/**
 * @author Lance Dolan
 * 7/21/2016
 *
 * For Synacore Weather App.
 *
 * Driver logic to be executed on page load.
 *
 * Page load responsibilities include:
 *  1. retrieve location information
 *  2. use location information to retrieve weather information
 *  3. display all retrieved data, including alert if error occurs.
 */
com.synacore.weather.driver = function() {

    /* Begin Private Methods */

    /* process successful HTTP request to /ip endpoint.
     * will extract location information and send
     * additional request for weather information.
     */
    let processIpSuccess = function(jsonData , rawData) {
        if (jsonData.city && jsonData.location) {
            titleVm.updateInner('Current Conditions For:');
            cityVm.updateInner(jsonData.city);
            get('https://weathersync.herokuapp.com/weather/' +
                jsonData.location.latitude +
                ',' + jsonData.location.longitude,
               processWeatherSuccess,
               handleHttpError);
        } else {
            console.error('malformed response JSON structure. city or location not present.');
            alert('Oops! It looks like we\'re having a technical problem. ' +
              'Try again later?');
        }
    };

    /* process successfull HTTP request to /weather.
     * update the view with this new information.
     */
    let processWeatherSuccess = function(json) {
        //update the temp view with new data
        if (json && json.main && json.main.temp) {
            tempVm.updateInner(toFahrenheit(json.main.temp) + ' &deg;F');
        } else {
            console.error(
                'malformed response JSON structure. main.temp not present.'
            );
        }

        if (json && json.weather &&
                 json.weather[0].main &&
                 json.weather[0].icon) {
            descVm.updateInner(json.weather[0].main);
            iconVm.updateSrc('http://openweathermap.org/img/w/' +
                              json.weather[0].icon + '.png');
        } else {
            console.error('malformed response JSON structure.' +
                          'weather.main or weather.icon not present.');
        }
    };

    let toFahrenheit = function(kelvins) {
        return Math.round(kelvins * 9 / 5 - 459.67);
    };

    let handleHttpError = function() {
        //my get.js library I wrote for this exercise
        //already promises to do logging.
        //Only responsibility is to inform the user.
        alert('We\'re unable to reach the weather server at this time.');
    };

    /* End Private Methods */

    //Driver Logic

    let weatherVm = com.synacore.weather.vm;
    let get = com.synacore.weather.get;

    let titleVm = new weatherVm('title');
    let cityVm = new weatherVm('city');
    let tempVm = new weatherVm('temp');
    let iconVm = new weatherVm('icon');
    let descVm = new weatherVm('desc');

    get('https://weathersync.herokuapp.com/ip', processIpSuccess, handleHttpError);

};

document.addEventListener('DOMContentLoaded', function() {
    com.synacore.weather.driver();
}, false);
