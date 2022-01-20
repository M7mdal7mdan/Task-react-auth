import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "./api";

class AuthStore{
user = null;
constructor(){
    makeAutoObservable(this,{})
}
setUser =(token) =>{
    api.defaults.headers.common.Authoraization = `Bearer ${token}`;
    this.user =decode(token);
    localStorage.setItem("myToken",token);
}


signUp = async (user) =>{
    try{
        const response = await api.post(
            "/signup",user
        );
         this.setUser(response.data.token)
    }catch(error){}
} 
signIn = async (user) =>{
    try{
        const response = await api.post(
            "/signin",user
        );
         this.setUser(response.data.token)
    }catch(error){}
} 
logout =() =>{
    this.user =null
    delete api.defaults.headers.common.Authoraization;
    localStorage.removeItem("myToken");
}
checkForToken =()=>{
    //console.log("test");
    
const token = localStorage.getItem("myToken");
console.log(token);

if(token){
    const currentTime = Date.now();
    let user = decode(token);
    if(user.exp > currentTime)
    {
        this.setUser(token)

    }else{
        alert("logged out,please resignin session expired");
        this.logout();
    }

    
} else{
    
    this.logout();
}
}

}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;