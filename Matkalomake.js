import React, { Component } from 'react';

class Matkalomake extends Component {
    constructor(props) {
        super(props);
        this.state={ otsikko: '', paiva: '', paikka: '', saa: '', kuvaus: '' };
    }
    
    muutaOtsikko = (e) => {
        this.setState({ otsikko: e.target.value.toUpperCase() }); 
    }
    
    muuta = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    lisaa = (e) => {
        e.preventDefault();
    }
    
    tyhjenna = (e) => {
        e.preventDefault();
        this.setState({otsikko: '', paiva: '', paikka: '', saa: '', kuvaus: ''});
    }
     
    render() {
        return (
            
        <form>
            <h4 htmlFor='otsikko' style={styles.otsikkoStyle}>Kerro suunnitelmistasi:</h4> <br/>
            <input type='text' name='otsikko' placeholder='Otsikko' style={styles.labelStyle} value={ this.state.otsikko } onChange={ this.muutaOtsikko }/>
            <br/>
            <input type='date' name='paiva' placeholder='Päivä' style={styles.labelStyle} value={ this.state.paiva } onChange={ this.muuta }/>
            <br/>
            <input type='text' name='paikka' placeholder='Kohdemaa' style={styles.labelStyle} optionValue={ this.state.paikka } onChange={ this.muuta }/>
            <br/>
            <input type='text' name='saa' placeholder='Sää' style={styles.labelStyle} value={ this.state.saa } onChange={ this.muuta }/>
            <br/>
            <textarea name='kuvaus' placeholder='Kuvaus' style={styles.labelStyle} rows='4' cols='18' value={ this.state.kuvaus } onChange={ this.muuta }></textarea>
            <br/>
            <input type='button' style={styles.buttonStyle} value='Lisää' onClick={this.lisaa}/>
            &nbsp;
            <input type='button' style={styles.buttonStyle} value='Tyhjennä' onClick={this.tyhjenna}/>
        </form>
     
        );
    }
}

const styles = { 
    labelStyle: {
        fontFamily: 'Tahoma',
        width: '200px',
        display: 'block',
        padding: '12px 20px',
        margin: '8px',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        
    },

    buttonStyle: {
        fontFamily: 'Tahoma',
        color: 'salmon',
        display: 'block',
        padding: '12px 20px',
        margin: '8px',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },

    otsikkoStyle: {
        fontFamily: 'Tahoma',
        fontStyle: 'italic',
        color: 'salmon',
        margin: '8px',
        display: 'inline-block',   
    }
};

export default Matkalomake; 