import React, { useEffect, useState } from "react"

const useValidation = (stateInicial, validation, fn) =>{
    const [Value, setValue] = useState(stateInicial)
    const [error, setError] = useState({})
    const [submitForm, setSubmitForm] = useState(false)
    useEffect(()=>{
        if(submitForm){
            let notError = Object.keys(error).length===0;
            if(notError){
                fn()
            }
            setSubmitForm(false)
        }
    },[error])
    const handleChange = e =>{
        setValue({
            ...Value,
            [e.target.name]: e.target.value 
        })
    }
    const handleSubmit = e =>{
        e.preventDefault()
        const validationError = validation(Value);
        setError(validationError)
        setSubmitForm(true)
    }
    const handleBlur = () =>{
        const validationError = validation(Value);
        setError(validationError)
    }
    return{
        Value,
        error,
        submitForm,
        handleChange,
        handleSubmit,
        handleBlur
    };
}
export default useValidation;