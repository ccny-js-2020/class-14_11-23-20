//api documentation for weather api: https://openweathermap.org/api

//key created to gain access to weather map api
var apiKey = '275d5dfdea53a2d3e3869f48d154e9ac';

//input new york city
var newYorkCity = "new+york"
//input london
var london = "london"

//url required for get response
var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

$.ajax({
	type: 'GET',
	//url created above
	url: weatherApiUrl + newYorkCity,
	//if there's an error in the api call, you can 'catch' it and return a message back
	error: function (err) {
		console.log(err);
		if(err.status == 401){
			alert(err.statusText + ". Please input valid API Key");
		}
		if(err.status == 400){
			alert("Please input city")
		}
		if(err.status == 404){
			alert("City Not Found")
		}
	},
	success: function(response){

		//look at the console log of the response. This is what the api returns.
		console.log(response)
		console.log(response.name)
		console.log(response.main.temp)
	}
});

$.ajax({
	type: 'GET',
	//url created above
	url: weatherApiUrl + london,
	//if there's an error in the api call, you can 'catch' it and return a message back
	error: function (err) {
		console.log(err);
		if(err.status == 401){
			alert(err.statusText + ". Please input valid API Key");
		}
		if(err.status == 400){
			alert("Please input city")
		}
		if(err.status == 404){
			alert("City Not Found")
		}
	},
	success: function(response){
		//look at the console log of the response. This is what the api returns.
		console.log(response)
		console.log(response.name)
		console.log(response.main.temp)
	}
});
