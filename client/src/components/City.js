import React, { Component } from 'react';

class City extends Component {

    render(){
        return(
            <div>
                <button onClick={this.props.london} ref="London">London</button>
                <button onClick={this.props.sydney} ref="Sydney">Sydney</button>
                <button onClick={this.props.newYork} ref="New York">New York</button>
                <button onClick={this.props.sanFrancisco} ref="San Francisco">San Francisco</button>
            </div>
        )
    }
}

export default City;