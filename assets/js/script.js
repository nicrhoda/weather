var city = $("#search-bar")
key = "5b6aeea1e7cd821c4753182fa3b3249a"
fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + key)
.then(res => res.json())
.then(data => console.log(data))

var lat = "40.5092961";

var lon = "-88.9843937";

fetch("https://api.openweathermap.org/data/2.5/forecast?lat=40.5092961&lon=-88.9843937&units=Imperial&appid=5b6aeea1e7cd821c4753182fa3b3249a")
.then(res => res.json())
.then(data => console.log(data))