import React, { Component } from 'react';
import logo from '../../img/logo2.svg'

class MainMenu extends Component {
    render () {
        return (
            <>
                <a className="nav-btn" href="#"><li>Dodaj zadanie</li></a>
                <a className="nav-btn" href="#"><li>Kalendarz</li></a>
                <a className="nav-btn" href="#"><li>Ulubione</li></a>
                <div id="logo"><img src={logo} alt="Logo"/></div>
            </>
        )
    }
}

export default MainMenu;