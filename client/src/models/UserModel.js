import axios from 'axios';

class UserModel {

    static all(){
        let request = axios.get("https://localhost:4000/api/users")
        return request;
    }

    static getUser(email, password){
        
        let request = axios.get("http://localhost:4000/api/user/" + email);
        return request;
    }

    static createUser(newUser) {
        console.log('in createtUser', newUser);
        let request = axios.post("http://localhost:4000/api/user/create", 
            {newUser})
        return request;
    }
    
}

export default UserModel;