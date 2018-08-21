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
        // console.log(this.state.currentCity)
    }

    newYorkChange = () => {
        this.setState({
            currentCity: "New York",
        })
        // console.log(this.state.currentCity)
    }

    sanFranciscoChange = () => {
        this.setState({
            currentCity: "San Francisco",
        })
        // console.log(this.state.currentCity)
    }

    londonChange = () => {
        this.setState({
            currentCity: "London",
        })
        // console.log(this.state.currentCity)
    }



    
    render(){
        console.log(this.state.currentCity)
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