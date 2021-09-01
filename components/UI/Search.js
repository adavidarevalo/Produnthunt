import React, {useState} from "react"
import styled from "@emotion/styled"
import Router from "next/router"
const SeacrhForm = styled.form`
border:1px solid var(--grey2);
display: flex;
align-items: center;
justify-content: space-between;
height: 3rem;
input{
  height: 2.8rem;
  border: none;
  margin-left: 1rem;
  outline:none;
  ::placeholder{
    font-size: 1.3rem;
  }
}
button{
  background: transparent;
  border: none;
  display: block;
  &:hover{
    cursor:pointer;
  }
  svg{
    height: 1.4rem;
    width: 1.4rem;
  }
}
`

const Search = () =>{
  const [searchContainer, setSearchContainer] = useState("")
  const handleChange = e =>{
    setSearchContainer(e)
  }
  const handleClick = e =>{
    e.preventDefault()
    if(searchContainer === "")return;
    Router.push({
      pathname: "/search",
      query: {q: searchContainer}
    })
  }
  return(
    <SeacrhForm>
      <input
      type="Text"
      placeholder="Search Product"
      onChange={(e)=>handleChange(e.target.value)}
      />
      <button
      type="submit"
      onClick={handleClick}
      >
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#9c9999" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
      </button>
    </SeacrhForm>
  )
}
export default Search