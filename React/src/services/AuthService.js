
let AuthService = ()=>{
    if(localStorage.getItem("token"))
        return true;
    else   
        return false;
}

let ClearToken = ()=>{
    localStorage.removeItem("token");
}

export {AuthService, ClearToken};