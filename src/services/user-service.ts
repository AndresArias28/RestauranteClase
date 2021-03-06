import {Con} from './db-connection';
import{Collection} from 'mongodb';
import{User} from './common/user';

class UserService{
    //private collection = "Users"
    private db: Collection<User> = Con.db.collection("Users");

    login(email:string, pass:string): Promise<User>{
        return this.db.findOne({
            email:email,
            password:pass
        })
    }

    signin(user:User){
       return this.db.findOne({email:user.email})
        .then(usr=>{
            if(usr == null){
                return this.db.insertOne(user);
            }else{
                return Promise.reject("Usuario ya existente")
            }
        });
    }
}

export const userService = new UserService();