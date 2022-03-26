// create a new timestamp
var timestamp = new Date().getTime();

var el = document.getElementById("testimg");

el.src = "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/GEOCOLOR/678x678.jpg?t=" + timestamp;

function refreshImage(imgElement, imgURL){
    // create a new timestamp
    var timestamp = new Date().getTime();

    var el = document.getElementById(imgElement);

    var queryString = "?t=" + timestamp;

    el.src = imgURL + queryString;
}
