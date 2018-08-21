import React, { Component } from 'react';

class City extends Component {









    render(){
        return(
            <div>
                <h1 ref="London">London</h1>
                <h1 ref="Sydney">Sydney</h1>
                <h1 ref="New York">New York</h1>
                <h1 ref="San Francisco">San Francisco</h1>
            </div>
        )
    }
}

export default City;