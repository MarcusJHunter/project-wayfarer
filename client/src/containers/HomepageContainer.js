import React, {Component} from 'react';
import Popup from "reactjs-popup";
import City from '../components/City';
import PostForm from '../components/CreatePostForm';

class HomepageContainer extends Component {
    
    state = {
        currentCity: "London",
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
        console.log(this.state.currentCity)
        console.log(this.props)
        
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
                <Popup trigger={<a className="button makeProfile"> Create Post! </a>} modal>
                    {close => (
                        <div className="modal">
                            <a className="close" onClick={close}>
                            &times;
                            </a>
                            <PostForm 
                                user={this.props.user}
                                loggedIn={this.props.loggedIn}
                                currentCity={this.state.currentCity}
                            />
                        </div>)}
                </Popup>
                <h1 id="newPost">New post made</h1>
            </div>
        )
    }
}

export default HomepageContainer;