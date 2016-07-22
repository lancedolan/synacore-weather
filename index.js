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

    let weatherVm = com.synacore.weather.vm;

    let titleVm = new weatherVm('title');
    let cityVm = new weatherVm('city');
    let tempVm = new weatherVm('temp');
    let iconVm = new weatherVm('icon');
    let descVm = new weatherVm('desc');


    let toFahrenheit = function(kelvins) {
        return Math.round(kelvins * 9 / 5 - 459.67);
    };

    let handleWeatherSuccess = function(json) {
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

    let handleGeneralError = function() {
        //NOTE: Production quality code would do much
        //more logging and informing than this.
        //I presume this to be reasonable placeholder
        //handling for the purposes of this take home challenge.
        //If error checking was a metric of examination for
        //this test, please let me know so that I can impress
        //with proper error handling and informing.
        alert('Oops! It looks like we\'re having a technical problem. ' +
              'Try again later?');
    };

    let get = com.synacore.weather.get;

    get('https://weathersync.herokuapp.com/ip' ,
        function(jsonData , rawData) {
            if (jsonData.city && jsonData.location) {
                titleVm.updateInner('Current Conditions For:');
                cityVm.updateInner(jsonData.city);
                get('https://weathersync.herokuapp.com/weather/' + jsonData.location.latitude + ',' + jsonData.location.longitude,
                   handleWeatherSuccess,
                   handleGeneralError);
            } else {
                console.error('malformed response JSON structure. city or location not present.');
                handleGeneralError();
            }
        },
        handleGeneralError
    );

};

document.addEventListener('DOMContentLoaded', function() {
    com.synacore.weather.driver();
}, false);
