import React, { Component } from 'react';

class Sananlasku extends Component {
    
    constructor(props) {
        super(props);
        this.state = { tekija: '', teksi: ''};
    }
    
    componentDidMount = () => {
        return fetch('http://quotes.rest/qod.json')
            .then((response) => response.json())
            .then((responseJson) => {
            this.setState({
                tekija: responseJson.contents.quotes[0].author,
                teksti: responseJson.contents.quotes[0].quote
            });
        })
            .catch((error) => {
            // console.error(error); 
            this.setState({
                tekija: 'Midora',
                teksti: 'Ai ku kiva päivä'
            });
})
    }
    
    render () {
        return ( 
            <div>
            {this.state.teksti}
            <br/>
            - {this.state.tekija} - 
            </div>
         );
    }
}

export default Sananlasku; 