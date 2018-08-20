import axios from 'axios';

class UserModel {

    static all(){
        let request = axios.get("https://localhost:3000/api/users")
        return request;
    }

    static getUser(email, password){
        console.log('in getUser')
        let request = axios.get("http://localhost:3000/api/user/"+email);
        return request;
    }

    static createUser(user) {
        let request = axios.post("https://localhost:3000/api/users/create", user)
        return request;
    }
    
}

export default UserModel;