import React, { Component } from 'react';
import WeatherGif from './WeatherGif';

const monthList = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];

class TodayTop extends Component {
    render () {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        return (
            <>
                <div className="todayTop">
                    <div className="todayGridPart todayTopBig todayDayOfMonth">
                        {day}
                    </div>
                    <WeatherGif />
                    <div className="todayGridPart todayTopSmall month">
                        {monthList[month]}
                    </div>
                    <div className="todayGridPart todayTopSmall temperature">
                        8.0 st C
                    </div>
                </div>
            </>
        )
    }
}

export default TodayTop;