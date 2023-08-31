const apiKey = "8294a00e1d814715cb42bb2066020358";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

// url komplitnya
// https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bekasi&appid=8294a00e1d814715cb42bb2066020358


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data)
// masukin setiap element
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round( data.main.temp ) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";


    // mengganti ikon gambar
    // (cth: Clouds harus C nya besar karna sesuai dengan isian JSON Api)
    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src ='images/clouds.png'
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src ='images/clear.png'
    } else if(data.weather[0].main == 'Rain'){
        weatherIcon.src ='images/rain.png'
    } else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src ='images/drizzle.png'
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src ='images/mist.png'
    } else if(data.weather[0].main == 'Haze'){
        weatherIcon.src = 'images/haze.png'
    } else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png'
    }

    document.querySelector('.weather').style.display = "block"


}

// checkWeather('tangerang');

// nyambungin input kota dengan tombol cari
searchBtn.addEventListener('click', () => {
    // searchBox nya dibungkus sama checkWeather
    checkWeather(searchBox.value);
    // ngilangin isian input
    searchBox.value = null;
    // memunculkan alert kerika isiannya kosong
    if(searchBox.value === "" || searchBox.value === undefined){
        alert('kota tidak ditemukan')
    }
})

// detected keyboard enter ke input searchBox
searchBox.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        checkWeather(searchBox.value);
        // ngilangin isian input
        searchBox.value = null;
        // memunculkan alert kerika isiannya kosong
    } 
    // masih gagal yang undefined 
    // if(searchBox.value === "" || searchBox.value === undefined){
    //     alert('kota tidak ditemukan')
    // }
    // pakai thenary tetep masih gagal
    // let add = searchBox.value === "" || searchBox.value === undefined ? alert('kota tidak ditemukan') : ""
    // console.log(add)
})


// eror bikin sendiri
// let eror = document.querySelector('.eror')
// if(searchBox.value ){
//     alert('salah kota')
//     eror.innerHTML = "kota tidak ditemukan"
// }






