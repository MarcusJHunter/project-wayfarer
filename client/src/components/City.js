import React, { Component } from 'react';

class City extends Component {

    render(){
        return(
            <div className="cityButtons">
                <button className="city" onClick={this.props.london} ref="London">London</button>
                <button className="city" onClick={this.props.sydney} ref="Sydney">Sydney</button>
                <button className="city" onClick={this.props.newYork} ref="New York">New York</button>
                <button className="city" onClick={this.props.sanFrancisco} ref="San Francisco">San Francisco</button>
            </div>
        )
    }
}

export default City;