import axios from 'axios';

class PostModel {

    static all(){
        let request = axios.get("https://super-crud-api.herokuapp.com/api/posts")
        return request;
    }

    static createPost(post) {
        let request = axios.post("https://super-crud-api.herokuapp.com/api/users/posts/create", post)
        return request;
    }
}

export default PostModel;