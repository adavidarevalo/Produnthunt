export default function createAccountValidation(Values){
    let error ={};
    if(!Values.name){
        error.name="The name is require"
    }
    if(!Values.email){
        error.email="The email is require"
    } else if(!/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i.test(Values.email)){
        error.email="The email is wrong"
    }
    if(!Values.password){
        error.password="The password is require"
    }
    if(Values.password < 6){
        error.password="The password must be greater than 6 characters"
    }
    if(Values.password !== Values.confirmPassword){
        error.confirmPassword="Passwords do not match"
    }
    return error
}