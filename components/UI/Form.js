import styled from "@emotion/styled"
export const Container= styled.form`
min-height:90vh;
max-height:auto;
display: flex;
justify-content: center;
align-items: center;
`
export const Form = styled.form`
width: 100%;
max-width: 400px;
h2{
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
}
div{
    display:flex;
    align-items:center;
    margin-bottom: 20px;
    label{
        flex:0 0 110px;
        font-size: 1.5rem;
    }
    input{
        flex:1;
        padding:.4rem;
        outline:none;
    }
    textarea{
        min-height: 200px;
        width:100%;
        outline:none;
        padding: 10px;
    }
}
fieldset{
    border:1px solid #e1e1e1;
    margin:15px 0px;
    padding:10px;
}
`
export const Button = styled.button`
font-weight: 700;
text-transform: uppercase;
border: 1px solid #d1d1d1;
padding: .8rem 2rem;
border-radius: 3px;
background-color:#DA552F;
color:white;
width: 100%;
margin-top: 10px;
&:hover{
    cursor:pointer;
}
`