// var citySearchUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city.val() + '&limit=1&units=imperial&appid=' + key;

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
      let temp = data.list[0].main.temp;
      console.log(temp);
      $('#templarge').append(temp);
    })
  }
  // )}

$('#btn').on('click', function() {
  fetchRequest();
})



