import React, { Component } from 'react';

class WeatherGif extends Component {

    componentDidMount() {
        const urlIP = 'http://ip-api.com/json/';
         
        async function getApiData() {
                try {

                let responseIP = await fetch(urlIP);
                let dataIP = await responseIP.json();

                let urlWeather = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c186786fea48436f689246a3465eb496/${dataIP.lat},${dataIP.lon}?units=si&lang=pl`;
                
                let weatherFetch = await fetch(urlWeather);
                let weatherData = await weatherFetch.json();

                let weatherIcon = weatherData.currently.icon;

                // document.getElementById("weatherGif").innerHTML = `<img src=require(../../img/icons/${weatherIcon}.svg) alt="icon"></img>`;

                console.log(dataIP);
                console.log(weatherIcon);
                return weatherIcon;
            } catch (error) {
                
            }
        };
        getApiData();
    }



    render () {
        return (
            <>
                <div className="todayGridPart todayTopBig" id="weatherGif">
                    {/* <img src={require(`../../img/icons/${weatherIcon}.svg`)} alt="icon"></img> */}
                </div>
            </>
        )
    }
}

export default WeatherGif;