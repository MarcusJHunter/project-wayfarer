import React, {Component} from 'react';

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


    render(){
        // console.log(localStorage.getItem('userEmail'))
        // console.log(localStorage.getItem('userId'))
        // let canEdit = false;
        // if(){

        // }

        return(
            <div className="">
                
                {/* <h3>{this.props.post.body}</h3> */}
                {
                    this.state.canEdit
                    ? <input type="text" value={this.state.title} onChange={this.handleTitle}/>
                    : <h2>{this.props.post.title}</h2>
                }
                {
                    this.state.canEdit
                    ? <input type="text" value={this.state.body} onChange={this.handleBody}/>
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