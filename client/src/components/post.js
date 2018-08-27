import React, {Component} from 'react';
import PostModel from '../models/PostModel';
import London from '../img/London2.jpg';
import Sydney from '../img/Sydney2.jpg';
import NY from '../img/NYC2.jpg';
import SF from '../img/SF2.jpg';

class Post extends Component {

    state = {
        canEdit: false,
        title: this.props.post.title,
        body: this.props.post.body
    }

    handleEdit = () => {
        this.setState({canEdit: true});
        document.getElementById("editPost").style.display= "None";
    }

    handleTitle = (event) => {
        this.setState({title: event.target.value})
    }

    handleBody = (event) => {
        this.setState({body: event.target.value})
    }

    submit = () => {
        let post = {
            title: this.state.title,
            body: this.state.body
        }
        PostModel.updatePost(this.props.post._id, post)
            .then(res => {
                console.log("In Submit .then", res.data)
                this.props.editPost(res.data)
                this.setState({canEdit: false})
                document.getElementById("editPost").style.display= "block";
                
            })
            .catch(err => {
                console.log("this.props.post ", this.props.post)
                console.log(err);
            })
    }

    delete = () => {

        let newPost = this.props.post;
        
        PostModel.deletePost(this.props.post._id)
            .then(res => {
                this.setState({canEdit: false});
                document.getElementById("editPost").style.display= "none";
                this.props.deletePost(newPost)
            })
            .catch(err => {
                console.log(err);
            })
    }


    render(){
        console.log('post render', this.props.post);

        return(
            <div className="">
                {
                    this.state.canEdit
                    ? <input type="text" ref="title" value={this.state.title} onChange={this.handleTitle}/>
                    : <h2>{this.props.post.title}</h2>
                }
                {
                    this.state.canEdit
                    ? <input type="text" ref="body" value={this.state.body} onChange={this.handleBody}/>
                    : <h2>{this.props.post.body}</h2>
                }
                {
                    this.state.canEdit
                    ? <button onClick={this.submit}>Submit</button>
                    : null
                }
                {
                    this.state.canEdit
                    ? <button onClick={this.delete}>Delete</button>
                    : null
                }
                {
                    this.props.post.user === localStorage.getItem('userId')
                    ? <button id="editPost" onClick={this.handleEdit}>Edit Post</button>
                    : null
                }

                
            </div>
        )
    }
}

export default Post;