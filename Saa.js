import React, { Component } from 'react';

class Saa extends Component {
    
    constructor(props) {
        super(props);
        this.state = { paikkakunta: '', kuva: '', lampotila: '', kuvaus: '', tuuli: '' };
    }
    
    componentDidMount = () => {
        return ( fetch('http://api.openweathermap.org/data/2.5/weather?lang=fi&lat=60.17&lon=24.94&units=metric&APPID=bb171146710264876105e39a9fd790db')
            .then((response) => response.json())
            .then((responseJson) => {
            this.setState({
                paikkakunta: responseJson.name,
                lampotila: responseJson.main.temp,
                kuvaus: responseJson.weather[0].description,
                tuuli: responseJson.wind.speed,
                kuva: 'http://api.openweathermap.org/img/w/' + responseJson.weather[0].icon
                
            });
            
        })
        
        .catch((error) => {
            alert('Säätietoja ei saatavilla');
            
        })
        )
    }
    
    render () {
        return (
            <div>
                <h3> { this.state.paikkakunta } </h3>
                <p> 
                    <img src={ this.state.kuva } alt='Sääkuva'/> <br/> 
                    { this.state.lampotila } astetta <br/> 
                    { this.state.kuvaus } <br/>
                    { this.state.tuuli } m/s
            
                </p>
            </div>
            
        ); // tähän päättyy return
    } // tähän päättyy render
} // tähän päättyy Saa

export default Saa; 