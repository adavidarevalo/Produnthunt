
import React from "react"
import styled from "@emotion/styled"
const ErrorDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 80vh;
`

const Error404 = ()=>(
    <ErrorDiv>
      <h1>Error 404</h1>
      <p>Page Not Found</p>
    </ErrorDiv>
)

export default Error404