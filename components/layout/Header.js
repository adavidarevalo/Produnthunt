
import React, { useContext } from "react"
import Search from "../UI/Search"
import Navegation from "./Navegation"
import Link from "next/link"
import styled from "@emotion/styled"
import {css} from "@emotion/react"
import Button from "../UI/Button"
import {FirebaseContext} from "../../firebase"
import {useRouter} from "next/router"

const HeaderConatiner = styled.div`
display:flex;
justify-content: space-around;
`
const HeaderLogo = styled.a`
font-weight: 700;
color:var(--orange);
margin: 0;
font-size: 3.5rem;
margin-right: 1rem;
cursor: pointer;
`
const Header = () =>{
  const router = useRouter()
  const {user, firebase} = useContext(FirebaseContext)
  return(
    <header
    css={css`
    border-bottom: 1px solid var(--gray3);
    `}>
      <HeaderConatiner>
      <div css={css`
      display: flex;
      align-items: center;
      `}>
        <Link href="/">
          <HeaderLogo>P</HeaderLogo>
        </Link>
        <Search/>
        <Navegation/>
      </div>
      <div
      css={css`
      display: flex;
      align-items: center;
      `}>
        {user ?(
          <>
           <p
           css={css`
              margin-right: 2rem;
           `}
           >Hi: <span>{user.displayName}</span></p>
           <Button
           bgColor="true"
           type="button"
           onClick={()=>{
             firebase.LogOut(),
             router.push("/")
            }}
           >Close Session</Button>
          </>
        ) :(
          <>
        <Link href="/login">
          <Button bgColor="true">
            Log In
          </Button>
          </Link>
        <Link href="/createAccount">
          <Button>
            Create New Account
          </Button>
          </Link>
          </>
        )}
      </div>
      </HeaderConatiner>
    </header>
  )
}

export default Header