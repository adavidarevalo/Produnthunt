export default function logIngValidation(Values){
    let error ={};
    if(!Values.email){
        error.email="The email is require"
    } else if(!/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i.test(Values.email)){
        error.email="The email is wrong"
    }
    if(!Values.password){
        error.password="The password is require"
    }
    return error
}