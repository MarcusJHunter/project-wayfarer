import React, {Component} from 'react';
import Popup from "reactjs-popup";
import City from '../components/City';
import PostForm from '../components/CreatePostForm';
import CityPosts from '../components/CityPosts';
import PostModel from '../models/PostModel';

class HomepageContainer extends Component {
    
    state = {
        currentCity: "London",
        posts: []
    }


    componentDidMount = () => {
        PostModel.all()
            .then(res => {
                console.log(res.data);
                this.setState({posts: res.data});
            })
    }

    addPost = (newPost) => {
        let posts = this.state.posts;
        posts.push(newPost)
        this.setState({posts: posts});
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
            <div className="cityPage">
                <City 
                    sydney={this.sydneyChange}
                    newYork={this.newYorkChange}
                    london={this.londonChange}
                    sanFrancisco={this.sanFranciscoChange}
                    currentCity={this.state.currentCity}
                    loggedIn={this.state.loggedIn}
                />
                <div className="postHalf">
                    <Popup trigger={<a className="button makeProfile"> Create Post! </a>} modal>
                        {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>
                                &times;
                                </a>
                                <PostForm 
                                    addPost={this.addPost}
                                    user={this.props.user}
                                    loggedIn={this.props.loggedIn}
                                    currentCity={this.state.currentCity}
                                />
                            </div>)}
                    </Popup>

                    <CityPosts  currentCity={this.state.currentCity} user={this.props.user} posts={this.state.posts} />

                    {/* <h1 id="newPost">New post made</h1> */}
                </div>
            </div>
        )
    }
}

export default HomepageContainer;