//key create to gain access to weather map api
var apiKey = '';
//url required for get response
var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

//celsius formula
function farenheitToCelsius(temp){
	return ((temp - 32) * (5/9)).toFixed(2);
}
function celsiusToFarenheit(temp){
	return (temp * (9/5) + 32).toFixed(2);
}
//returning a boolean, checking that the html text fields are both blank
function pTagsAreBlank(){
	var weatherP = $("#weather").text();
	var cityNameP = $("#city-name").text();

	return weatherP == "" && cityNameP == "";
}

//writing functionality for the if the checkbox is checked or not
function appendBasedOnCelsiusCheckbox(tempInFarenheit){
	var isChecked = $("#celsius-checkbox").prop("checked");
	if(!pTagsAreBlank()){
		if(isChecked){
			$("#weather").text("in celsius right now is " + farenheitToCelsius(tempInFarenheit) + " degrees");
		} else {
			$("#weather").text("in farenheit right now is " + tempInFarenheit + " degrees");
		}
	}
}

//when the weather button is clicked, set up the weather api call and the logic
$('#weather-button').on('click', function(){
	var cityInputValue = $('#city-input').val()
	if(cityInputValue == ""){
		$("#error-message").text("Please enter City");
		$("#error-toast").toast("show")
	} else {
		var urlCityInputValue = cityInputValue.toLowerCase().split(" ").join("+");
		console.log(urlCityInputValue)

		var completeApiUrl = weatherApiUrl + urlCityInputValue;
		console.log(weatherApiUrl)
		$.ajax({
			type: 'GET',
			url: completeApiUrl,
			error: function (err) {
				if(err.status == 404){
					$("#error-message").text("City Not Found");
					$("#error-toast").toast("show")
				}
			},
			success: function(response){
				//this will originally show as an error in the console. Make this have no error.
				console.log(response);
				$('#city-input').val("");

				var cityName = response.name;
				var farenheitTemp = response.main.temp;

				$("#city-name").text("The Weather for " + cityName);

				$("#celsius-checkbox").click(function(){
					appendBasedOnCelsiusCheckbox(farenheitTemp);
				});

				appendBasedOnCelsiusCheckbox(farenheitTemp);
			}
		});
	}

});

$("#celsius-checkbox").click(function(){
	var weatherText = $("#weather").text();
	if(weatherText != ""){
		if()
		var newWeatherText = weatherText.split("in farenheit right now is ").join("").split(" degrees")[0];
		var farenheitTemp = parseFloat(newWeatherText)
	}
	appendBasedOnCelsiusCheckbox(farenheitTemp);
});
