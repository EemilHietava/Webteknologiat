window.onload = function () {
    console.log("Tässä lukee nyt jotain");
}
function showMap() {
    let address = document.getElementById("exampleInputAddress").value;
    let city = document.getElementById("exampleInputCity").value;
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
    iframeElement.src = place;
}
