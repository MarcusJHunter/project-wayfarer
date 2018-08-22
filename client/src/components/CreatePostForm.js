import React, {Component} from 'react';
import Users from '../models/UserModel';
import Posts from '../models/PostModel';

class PostForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        Posts.createPost({
            title: this.refs.title.value,
            body: this.refs.body.value,
            city: this.props.currentCity
        }, this.props.user.email)
            .then(res => {
                if(res){
                    console.log("in then", res.data)
                    this.props.addPost(res.data)
                    // document.getElementById("newPost").style.display = "block"
                }
            })
            .catch(err => {
                console.log(err);
                console.log("in catch");
            })

    }



    render(){
        return(
            <form className='ClassForm' onSubmit={this.handleSubmit}>
                <h2>Post Form</h2>
                <div className='form-group'>
                    <label htmlFor = 'text' > Title </label>
                    <input type = 'text' className = 'form-control' ref='title'/>
                </div>
                <div className='form-group'>
                    <label htmlFor = 'text' > Body </label>
                    <input type = 'text' className = 'form-control' ref='body'/>
                </div>
                <button type = 'submit' className = 'btn btn-primary' >
                Post the Post
                </button>
            </form>
        )
    }

}

export default PostForm;