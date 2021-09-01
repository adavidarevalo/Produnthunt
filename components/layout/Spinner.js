
import React from "react"
import styles from "./styles/Spinner.module.css"
import styled from "@emotion/styled"
const Container = styled.div`
background:red;
position:absolute;
top:0px;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background:#fff;
`

const Spinner = () =>{
    return(
        <Container>
            <div className={styles.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    )
}

export default Spinner