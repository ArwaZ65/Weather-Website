var inputvalue = document.querySelector('#cityname');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#discription');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik = "2f5c82a99ba2882629d519a54f08ea55"

function convertion(val) {
    // convert temprature from fehrit to celisi 
    return (val - 273).toFixed(3)
    // toFixed(3)3 decimal 
}
btn.addEventListener('click', function () {
    // apik--city id 

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']//cityname
            var describ = data['weather']['0']['description']
            var temprature = data['main']['temp']
            var wandspeed = data['wind']['speed']


            city.innerHTML = ` weather of <span>${nameval}</span> `
            temp.innerHTML = `Temperature: <span>${convertion(temprature)} C</span>`
            descrip.innerHTML = `Sky Conditions: <span>${describ}<span>`
            wind.innerHTML = `Wind Speed: <span>${wandspeed} km/h<span>`
        })
        .catch(err => alert("you entered wrong city"))
})