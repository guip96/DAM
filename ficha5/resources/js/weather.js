let axios = require('axios').default;
let moment = require('moment');

weather_button = document.getElementsByClassName('weather_button');
weather_button.item(0).addEventListener('click', getweather,false);
weather_box = document.getElementById('weather');
boxes = weather_box.getElementsByClassName('container_box');


function getweather(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=8012366&units=metric&APPID=69e1db9c1141a68ed366382511f871a1')
    .then(function (weather_json){
        weather_data = weather_json.data
        boxes.item(0).getElementsByClassName('item_box').item(0).
            textContent = weather_data.main.temp + ' ºC';
        boxes.item(1).getElementsByClassName('item_box').item(0).
            textContent = weather_data.main.temp_min + ' ºC';
        boxes.item(2).getElementsByClassName('item_box').item(0).
            textContent = weather_data.main.temp_max + ' ºC';
        boxes.item(3).getElementsByClassName('item_box').item(0).
            textContent = weather_data.main.humidity + ' %';
        boxes.item(4).getElementsByClassName('item_box').item(0).
            textContent = weather_data.wind.speed + ' Km/h (' + weather_data.wind.deg + 'º)';
        boxes.item(5).getElementsByClassName('item_box').item(0).
            textContent = weather_data.weather[0].main + ' (' + weather_data.weather[0].description + ')';
        boxes.item(6).getElementsByClassName('item_box').item(0).
            textContent = weather_data.main.pressure + ' hPa';
        boxes.item(7).getElementsByClassName('item_box').item(0).
            textContent = moment.unix(weather_data.sys.sunrise).format('HH:mm:ss');
        boxes.item(8).getElementsByClassName('item_box').item(0).
            textContent = moment.unix(weather_data.sys.sunset).format('HH:mm:ss');
        date=moment()
        boxes.item(9).textContent = moment(date).fromNow()
        setInterval(function() {
            boxes.item(9).textContent = moment(date).fromNow()
        },60000);
    });
}



