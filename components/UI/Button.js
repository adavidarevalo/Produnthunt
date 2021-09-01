import styled from "@emotion/styled"

const Button = styled.a`
text-align: center;
display:block;
font-weight: 700;
text-transform: uppercase;
border: 1px solid #d1d1d1;
padding: .8rem 2rem;
margin-right: 1rem;
border-radius: 3px;
background-color: ${props=> props.bgColor ? "#DA552F" : "white"};
color:${props=> props.bgColor ? "white" : "#DA552F"};
&:last-of-type{
  margin-right: 0px;
}
&:hover{
  cursor:pointer;
}
`
export default Button