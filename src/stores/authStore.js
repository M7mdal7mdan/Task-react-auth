import { makeAutoObservable } from "mobx";
import axios from "axios";
import decode from "jwt-decode";
import api from "./api";

class AuthStore{
user = null;
constructor(){
    makeAutoObservable(this,{})
}
signUp = async (user) =>{
    try{
        const response = await api.post(
            "/signup",user
        );
         this.user = decode(response.data.token)
    }catch(error){}
} 

}
const authStore = new AuthStore();
export default authStore;