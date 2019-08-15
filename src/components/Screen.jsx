import React, {Component} from 'react';

class Screen extends Component {
    render() {
        if(this.props.shown.name){
        return (
            <div className="screen">
                <div className="Description">
                <div><strong>Name: </strong>{this.props.shown.name.toUpperCase()} </div>
                <div><strong>Weight: </strong> {this.props.shown.weight} LBS
                     <strong> Height: </strong>{this.props.shown.height} FT</div>
                <div><strong>Abilities: </strong>{this.props.shown.abilities[0].ability.name.toUpperCase()}</div>
                <div><strong>HP: </strong>{this.props.shown.stats[5].base_stat} PH</div>
                     <div><strong>ATK: </strong>{this.props.shown.stats[4].base_stat} </div>
                <img src={`http://www.pokestadium.com/sprites/emerald/animated/${this.props.shown.name}.gif`}/>
            </div>
            </div>
        
        )}
        return (
            <div className="screen">
                <div className="ScreenText">
                    <h1 className="Start-Text">Click The Green Button To Start</h1>
                </div>
            </div>
        )
    };
}

export default Screen;