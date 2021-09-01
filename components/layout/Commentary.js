import React, {useContext} from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import styled from "@emotion/styled"
import {FirebaseContext} from "../../firebase"

const CommentaryLi = styled.li`
border: .8px solid #b2b1b1;
padding: 15px;
margin-bottom: 20px;
p{
  margin: 0px;
  font-size: 1.4rem;
  span{
    font-weight: bold;
    font-size: 1.3rem;
  }
}
`
const CommentaryP = styled.p`
font-size: 1.8rem;
margin-block: 7px;
`

const Commentary = ({data}) =>{
  const {user} = useContext(FirebaseContext)
  return(
    <CommentaryLi>
      <p>{formatDistanceToNow(new Date(data.date))} Ago</p>
      <CommentaryP>{data.commentary}</CommentaryP>
      <p>By: <span>{data.name}</span></p>
      {(user.uid === data.Id) && <p>Creator</p>}
    </CommentaryLi>
  )
}
export default Commentary