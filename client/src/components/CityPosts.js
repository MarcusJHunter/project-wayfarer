import React, {Component} from 'react';
import Post from './post';

class CityPosts extends Component {

    render(){
        console.log(this.props)
        console.log(this.props.currentCity)

        let posts = this.props.posts.map(post => {
            if(post.city === this.props.currentCity){
                return(
                    <Post key={post._id} post={post}/>
                )
            }
             
        })

        return(
            <div className="cityPosts">
                <h3>City: {this.props.currentCity}</h3>
                <p>REPLACE WITH IMG TAG AND IMAGE</p>
                {posts}
            </div>
        )
    }
}

export default CityPosts;