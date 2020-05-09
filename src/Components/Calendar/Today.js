import React, { Component } from 'react';
import TodayTop from './TodayTop';
import TodayBottom from './TodayBottom';

class Today extends Component {
    render () {
        return (
            <>
            <TodayTop />
            <TodayBottom />
            </>
        )
    }
}

export default Today;