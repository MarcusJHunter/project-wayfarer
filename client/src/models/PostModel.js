import axios from 'axios';

class PostModel {

    static all(){
        let request = axios.get("http://localhost:4000/api/posts")
        return request;
    }

    static createPost(post) {
        let request = axios.post("http://localhost:4000/api/posts/create", post)
        return request;
    }
}

export default PostModel;