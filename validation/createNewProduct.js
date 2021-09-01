
export default function createNewProduct(Values){
    let error ={};
    if(!Values.name){
        error.name="The name is require"
    }
    if(!Values.company){
        error.company="The Companys name is require"
    }
    if(!Values.url){
        error.url="The url is require"
    } else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(Values.url)){
        error.url="The url is wrong"
    }
    if(!Values.description){
        error.description="The description is require"
    }
    return error
}