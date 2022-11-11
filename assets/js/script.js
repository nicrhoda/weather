// var citySearchUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city.val() + '&limit=1&units=imperial&appid=' + key;
var currentCity = $('#current');
var cityElements = $('#city-large-elements');
key = "5b6aeea1e7cd821c4753182fa3b3249a";

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
var units = "&units=Imperial&appid=";





function fetchRequest () {
  // $('#btn').on('click', function() {
    var city = $('#userInput').val();
    console.log(city);
    localStorage.setItem('city', city);
    $('#city').text(city);
    
    let newQueryURL = queryURL + city + units + key; 
    console.log(newQueryURL);
    fetch(newQueryURL)
    .then(function(res) {
      return res.json();
    })
    .then(function(data){
      console.log(data);
      $('#templarge').append("Temp: " + data.list[0].main.temp);
      $('#windlarge').append("Wind speed: " + data.list[0].wind.speed);
      $('#humlarge').append("Humidity: " + data.list[0].main.humidity + "%");
      $('#day1').append( moment().calendar());
      $('#day2').append( moment().add(1, 'days').calendar());
      $('#day3').append( moment().add(2, 'days').calendar());
      $('#day4').append( moment().add(3, 'days').calendar());
      $('#day5').append( moment().add(4, 'days').calendar());

      $('#temprow1').append("Temp: " + data.list[0].main.temp);
      $('#temprow2').append("Temp: " + data.list[1].main.temp);
      $('#temprow3').append("Temp: " + data.list[2].main.temp);
      $('#temprow4').append("Temp: " + data.list[3].main.temp);
      $('#temprow5').append("Temp: " + data.list[4].main.temp);
      
      $('#windrow1').append("Wind speed: " + data.list[0].wind.speed);
      $('#windrow2').append("Wind speed: " + data.list[0].wind.speed);
      $('#windrow3').append("Wind speed: " + data.list[0].wind.speed);
      $('#windrow4').append("Wind speed: " + data.list[0].wind.speed);
      $('#windrow5').append("Wind speed: " + data.list[0].wind.speed);

      //reloads the page in order to clear old city and data
    $('#btn').on('click',function() {
      location.reload();
    })
    })
  }
  // )}

$('#btn').on('click', function() {
  fetchRequest();
 
})







