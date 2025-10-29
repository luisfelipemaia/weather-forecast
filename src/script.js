document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityname = document.querySelector('#city_name').value;

    if(!cityname) {
        return showAlert('Vocêe precisa digitar uma cidade');
    }

    const chave = 'a2c3424f220dbf9b52b39d76299db88e';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityname)}&appid=${chave}&units=metric&lang=pt_br`

    const results = await fetch(apiUrl);
    const json = await results.json();

    if (json.cod === 200) {
        showInfo({
            city: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempMax: json.main.temp_max,
            tempMin: json.main.temp_min,
            description: json.weather[0].description,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity,
        });
        
    } else {
        showAlert(`
            Não foi possível localizar...
            
            <img src="src/images/404.svg"/>
            
            `);
    }

});

function showInfo(json) {
    showAlert('');

    document.querySelector('#weather').classList.add('show');

    document.querySelector('#title').innerHTML = `${json.city} , ${json.country}`;
    document.querySelector('#temp_value').innerHTML = `${json.temp.toFixed().toString().replace('.', ',')}°C`;
    document.querySelector('#temp_description').innerHTML = `${json.description}`;
    document.querySelector('#temp_img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('#temp_max').innerHTML = `${json.tempMax.toFixed()}° C`;
    document.querySelector('#temp_min').innerHTML = `${json.tempMin.toFixed()}° C`;
    document.querySelector('#humidity').innerHTML = `${json.humidity.toFixed()}%`;
    document.querySelector('#wind').innerHTML = `${json.windSpeed.toFixed()} Km/h`;

}

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}