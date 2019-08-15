import './Pokedex.css';
import React from 'react';
import axios from 'axios';

import Screen from './Screen.jsx';

class Pokedex extends React.Component {
    state = {pokemon: {}, pic: ""};
    getPokeId = async (answer) => {
        var answer = prompt('Enter a Pokemon name').toLowerCase();
        console.log(answer);
        try {
            var stats = await axios.get("https://pokeapi.co/api/v2/pokemon/" + answer);
            var pic = 'http://www.pokestadium.com/sprites/emerald/animated/'+answer+'.gif';
        } catch {
            alert('Not a Pokemon');
            return;
        }
        stats = await stats.data;
        pic = await pic;
        await this.setState({pokemon: stats, pic: pic});
        
    }
    render(){
        return (
            <div className="Pokedex-Body">
                <Screen shown={this.state.pokemon} image={this.state.pic}/>
                <div className="stats-button" onClick={this.getPokeId}>
                </div>
            </div>
    
        )
    }
    
}

export default Pokedex;