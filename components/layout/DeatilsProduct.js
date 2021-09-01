
import React from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import styled from "@emotion/styled"
import Link from "next/link"
import Image from 'next/image'

const DeatilsProductDiv = styled.div`
display:flex;
width: 100%;
justify-content: space-between;
max-width: 700px;
margin: 0 auto;
padding: 10px 15px;
align-items: center;
background:#fff;
margin-bottom: 2px;
`
const ContainerDiv = styled.div`
display:flex;
img{
    width: 80px;
    height: 70px;
    margin-right: 10px;
}
div{
    h2, p{
        margin:0;
    }
    h2{
        font-size: 1.8rem;
        letter-spacing: 1px;
        cursor:pointer;
    }
    p{
        font-size: 1rem;
        margin: 5px 0px;
    }
}
`
const Commentary = styled.div`
display:flex;
align-items: center;
justify-content: center;
border: 1px solid #9999;
width: 120px;
border-radius: 3px;
cursor:pointer;
svg{
    width: 15px;
    margin-right: 5px;
}
p{
    margin:0;
}
`
const Votes = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid #9999;
border-radius: 3px;
cursor:pointer;
width: 50px;
height: 50px;
svg{
    width: 15px;
}
p{
    margin:0;
}
`
const DeatilsProduct = ({data})=>{
    const {company, date, description, id, name, urlImage, url, votes, commentary} = data
    return(
        <DeatilsProductDiv>
            <ContainerDiv>
              <img 
              src={urlImage} 
              alt={name}/>
              <div>
                <Link href="/product/[id]" as={`/product/${id}`}>  
                  <a>{name}</a>
                </Link>
                <p>{description}</p>
                <Commentary>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-dots" className="svg-inline--fa fa-comment-dots fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="gray" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
                  <p>{commentary.length} <span>Comentaries</span></p>
                </Commentary>
                <p>Publicado hace <span>{formatDistanceToNow(new Date(date))}</span></p>
              </div>
            </ContainerDiv>
            <Votes>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" className="svg-inline--fa fa-caret-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                <p>{votes}</p>
            </Votes>
        </DeatilsProductDiv>
    )
}
export default DeatilsProduct