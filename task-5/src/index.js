var request = require("request");

var url = "http://api.openweathermap.org/data/2.5/weather?q=Recife&appid=d531cb6301fd0e227a1c9463f371d0dc"

function showData(data){
	console.log(getWeatherString(data));
}

function getWeatherString(data) {
	var kelvinTemp = data.main.temp;
	var celsiusTemp = kelvinTemp - 272.15;
	var place = data.name;
	var message = "Weather in "+place+": Temperature: "+celsiusTemp.toFixed(2)+" celsius";
	return message;
}

function getWeather(dataReadyFunction) {
	if (dataReadyFunction === undefined) {
		throw "Callback function not defined";
	}
	request.get(url, function(error, response, body) {
		if (error || response.statusCode !== 200) {
			console.log("Problem with accessing data: ", error, response.statusCode);
		} else {
			dataReadyFunction(getWeatherString(JSON.parse(body)));
		}
	});
}

module.exports=getWeather;

