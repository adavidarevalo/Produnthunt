
import React from "react"
import Header from "./Header" 
import { Global, css } from "@emotion/react"
import Head from "next/head"

const Layout = props =>{
  return(
    <>
    <Global
    styles={css`
    :root{
      --grey: #3d3d3d;
      --grey2: #6F6F6F;
      --gray3: #3e3e3e;
      --orange: #DA552F;
    }
    html{
      font-size: 65.5%;
      box-sizing: border-box;
    }
    *, *:before, *:after{
      box-sizing: inherit;
    }
    body{
      font-size: 1.6rem;
      line-height: 1.5;
      font-family: Roboto;
      font-weight: 300;
      margin:0;
    }
    h1, h2, h3{
      margin: 0, 0, 2rem, 0;
      line-height: 1.5;
    }
    h1, h2{
      font-family: Roboto;
      font-weight: 700;
    }
    ul{
      list-style: none;
      margin: 0;
      padding:0;
    }
    a{
      text-decoration: none;
    }
    `}
    />
    <Head>
      <title>Product</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet"/>
    </Head>
    <Header />
    <main>
      {props.children}
    </main>
    </>
  )
} 

export default Layout