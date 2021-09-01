
import React, {useContext} from "react"
import Link from "next/link"
import styled from "@emotion/styled"
import {FirebaseContext} from "../../firebase"
const NavContainer = styled.nav`
padding-left: 2rem;
a{
  font-size: 1.4rem;
  margin-left: 2rem;
  color: var(--gray2);
  &:last-of-type{
    margin-right: 0px;
  }
}
`

const Navegation = () =>{
  const {user} = useContext(FirebaseContext)
  return(
    <NavContainer>
      <Link href="/">Main</Link>
      <Link href="/popular">Popular</Link>
      {user && (
        <Link href="/newProduct">New Product</Link>
      )}
    </NavContainer>
  )
}

export default Navegation