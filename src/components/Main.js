import React, { Component } from 'react';

import Time from './Time';
import TimeWithPicker from './TimeWithPicker';
import Button from './Button';

import '../styles/styles.css';

class Main extends Component {
    state = {
        maghrib: null,
        fajr: null,
        third2: null,
        third3: null,
        middle: null
    }

    handleChangeMaghrib = (event, time) => {
        this.setState({ maghrib: time });
    };

    handleChangeFajr = (event, time) => {
        this.setState({ fajr: time });
    };

    calculate = (timeStart, timeEnd) => {
        const timeInHour = time => time.getHours() + (time.getMinutes() / 60);
        const diff = timeInHour(timeStart) > timeInHour(timeEnd) ?
            24 - timeInHour(timeStart) + timeInHour(timeEnd)
            :
            timeInHour(timeEnd) - timeInHour(timeStart);
        const third = diff / 3;
        const half = diff / 2;

        const getFormat24hr = time => time >= 24 ? time - 24 : time ;
        let third2InHour = getFormat24hr(timeInHour(timeStart) + third);
        let third3InHour = getFormat24hr(third2InHour + third);
        let middleInHour = getFormat24hr(timeInHour(timeStart) + half);

        const getTimeString = (timeInHour) => {
            const addZero = n => n < 10 ? '0' + n : n;
            const hour = addZero(Math.floor(timeInHour));
            const minutes = addZero(Math.floor((timeInHour - hour) * 60));
            return `${hour}:${minutes}`;
        }
        const third2 = getTimeString(third2InHour);
        const third3 = getTimeString(third3InHour);
        const middle = getTimeString(middleInHour);

        this.setState({
            third2: third2,
            third3: third3,
            middle: middle
        });
    }

    render() {
        const { maghrib, fajr, third2, third3, middle } = this.state;
        return (
            <div className="Main">
                <h1 className='Main-instructions'>
                    Pour calculer les horaires du 2ème tiers, du dernier tiers et du milieu de la nuit, entrez les horaires de Maghrib et de Fajr.
                </h1>

                <div className='Times-container'>
                    <TimeWithPicker
                        label="Maghrib"
                        value={ maghrib }
                        handleChange={ this.handleChangeMaghrib }
                        color='#fec04d'
                    />

                <div className={ (third2 && middle && third3) ? 'show' : 'hide' }>
                        <Time
                            label='2e tiers'
                            time={ third2 }
                            color='#d67474'
                        />
                        <Time
                            label='Milieu'
                            time={ middle }
                            color='#a376d2'
                        />
                        <Time
                            label='3e tiers'
                            time={ third3 }
                            color='#6f89d9'
                        />
                    </div>

                    <TimeWithPicker
                        label='Fajr'
                        value={ fajr }
                        handleChange={ this.handleChangeFajr }
                        color='#2ec1d4'
                    />
                </div>

                <Button
                    classname='Button-calculate'
                    label='Calculer'
                    disabled={ !maghrib || !fajr }
                    handleClick={ () => this.calculate(maghrib, fajr) }
                />

                <a className='vecteezy' rel="nofollow" target="_blank" href="https://www.vecteezy.com">Graphics Provided by www.Vecteezy.com</a>
            </div>
        );
    }
}

export default Main;
