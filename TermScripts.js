
function WeatherData() {
    var term = document.getElementById('textbox').value
    
    
    $("#results").html("Displaying Results ...");
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" + term + ",US&cnt=4&appid=bb303870e85fb95152c243f1005830be&units=imperial", function (jsonData) {
        $("#results").html("");
        var template = $('#weathertemplate').html();
        var html = Mustache.render(template, jsonData);
        $("#results").html(html);
    });


}

function CurrentWeatherData() {
    var term = document.getElementById('textbox').value

    $("#currentweather").html("Displaying Results ...");
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + term + "&appid=bb303870e85fb95152c243f1005830be&units=imperial", function (jsonData) {
        $("#currentweather").html("");
        var template = $('#currentweathertemplate').html();
        var html = Mustache.render(template, jsonData);
        $("#currentweather").html(html);
    });


}