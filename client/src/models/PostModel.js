import axios from 'axios';

class PostModel {

    static all(){
        let request = axios.get("http://localhost:4000/api/posts")
        return request;
    }

    static deletePost(postId){
        let request = axios.delete("http://localhost:4000/api/posts/delete/"+postId)
        return request;
    }

    static updatePost(id, post){
        let request = axios.put("http://localhost:4000/api/posts/update/"+id, post)
        return request;
    }

    static createPost(post, email) {
        console.log('post req', post);
        let request = axios.post("http://localhost:4000/api/posts/create/" + email, post)
        return request;
    }
}

export default PostModel;