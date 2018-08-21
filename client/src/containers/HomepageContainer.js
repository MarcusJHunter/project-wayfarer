import React, {Component} from 'react';
import City from '../components/City';

class HomepageContainer extends Component {
    
    state = {
        currentCity: "London",
        loggedIn: false,
    }

    sydneyChange = () => {
        this.setState({
            currentCity: "Sydney",
        })
    }

    newYorkChange = () => {
        this.setState({
            currentCity: "New York",
        })
    }

    sanFranciscoChange = () => {
        this.setState({
            currentCity: "San Francisco",
        })
    }

    londonChange = () => {
        this.setState({
            currentCity: "London",
        })
    }



    
    render(){
        return(
            <div className="CityPage">
                <City 
                    sydney={this.sydneyChange}
                    newYork={this.newYorkChange}
                    london={this.londonChange}
                    sanFrancisco={this.sanFranciscoChange}
                    currentCity={this.state.currentCity}
                    loggedIn={this.state.loggedIn}
                />
            </div>
        )
    }
}

export default HomepageContainer;