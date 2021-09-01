
import React, {useEffect, useContext, useState} from "react"
import {useRouter} from "next/router"
import {FirebaseContext} from "../../firebase"
import Layout from "../../components/layout/Layout"
import Error404 from "../../components/layout/Error404"
import Spinner from "../../components/layout/Spinner"
import {css} from "@emotion/react"
import styled from "@emotion/styled"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import {Form} from "../../components/UI/Form"
import Button from "../../components/UI/Button"
import Commentary from "../../components/layout/Commentary"

const ContainerGrid = styled.div`
@media (min-width: 750px){
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    max-width: 90%;
    margin: 0 auto;
    column-gap: 2rem;
} 
`

const product = () =>{
    const [productContainer, getProductContainer] = useState({})
    const [Error, getError] = useState(false)
    const [Loading, getLoading] = useState(true)
    const {firebase, user} = useContext(FirebaseContext)
    const [commentaryContainer, setCommentaryContainer] = useState({})
    const router = useRouter()
    let id = router.query.id

    useEffect(()=>{
        if(id){
            getLoading(true)
            const getProduct = async()=>{
                const productQuery = await firebase.db.collection("product").doc(id)
                const product = await productQuery.get();
                if(product.exists){
                    getProductContainer(product.data())
                    getError(false)
                } else {
                    getError(true)
                }
                getLoading(false)
            }
            getProduct()
        }
    },[id])
    const {company, date, description, name, urlImage, url, votes, commentary, creator, votesComplete} = productContainer

    const handleClick = ()=>{
        if(!user) return router.push("/login")
        if(votesComplete.includes(user.uid)) return;

        firebase.db.collection("product").doc(id).update({votes: votes + 1, votesComplete: [...votesComplete, user.uid]})

            getProductContainer({
                ...productContainer,
                votes: votes + 1,
                votesComplete: true
            })
    }

    const verifyCreator = (creatorId, userUid) =>{
      if(!user) return false
        if(creatorId === userUid){
          return true
        }
      }
    const handleInput = e =>{
        if(!user) return router.push("/login")
        setCommentaryContainer({
          ...commentaryContainer,
          [e.target.name]: e.target.value,
        }
        )
    }
    const handleClickCommentary = () =>{
        if(!user) return router.push("/login")
        commentaryContainer.Id = user.uid;
        commentaryContainer.name= user.displayName;
        commentaryContainer.date= Date.now();

        firebase.db.collection("product").doc(id).update({
          commentary: [...commentary, commentaryContainer]
        })
        getProductContainer({
          ...productContainer,
          commentary: [...commentary, commentaryContainer]
        })
    }
    const deleteProduct = async() =>{
      if(!user) return router.push("/login")
      if(creator.id !== user.uid){
          return  router.push("/")
      }
      try {
        await firebase.db.collection("product").doc(id).delete()
        router.push("/")
      } catch (error) {
        console.log(error)
      }
    }
    return(
        <Layout>
            {Loading&&(<Spinner/>)}
            {Error ?(
                <Error404/>
            ):(
                <>
                  <h2
                  css={css`
                  text-align: center;
                  letter-spacing: 2px;
                  font-size: 3rem;
                  `}
                  >{name}</h2>
                  <ContainerGrid>
                      <div>
                          <div>
                          {date && (
                              <p>Publicado hace <span>{formatDistanceToNow(new Date(date))}</span></p>
                          )}
                          {creator && (
                              <p>Por {creator.name} de {company}</p>
                          )}
                          <img src={urlImage} alt={name} css={css`
                          max-width:100%;
                          `}/>
                          <p>{description}</p>
                          </div>
                          {user &&(
                            <div>
                              <h2 css={css`
                              text-align: center;
                              `}>Add your Comment</h2>
                              <Form css={css`
                              margin:0 auto;
                              `}>
                                  <div>
                                    <input
                                    type="text"
                                    placeholder="Your Comment"
                                    name="commentary"
                                    onChange={handleInput}
                                    />
                                  </div>
                                  <Button
                                  bgColor="true"
                                  onClick={handleClickCommentary}
                                  >Add Comment</Button>
                              </Form>
                          </div>
                          )}
                          <div>
                            <h2>Commentary</h2>
                            <ul>
                              {commentary&&  commentary.map(data=>(
                                <Commentary data={data} key={data.Id}/>
                              ))}
                            </ul>
                          </div>
                      </div>
                      <aside>
                          <Button
                          target="_blank"
                          href={url}
                          bgColor="true"
                          >
                            Visit URL
                          </Button>
                          <p css={css`
                              margin-top: 50px;
                              text-align: center;
                              `}>{votes} Vates</p>
                          {user && (
                              <Button
                              onClick={handleClick}
                              >Vote</Button>
                          )}
                      </aside>
                      {(creator && user)&&  verifyCreator(creator.id, user.uid) &&<button
                      onClick={deleteProduct}
                      >Delete Product</button>}
                  </ContainerGrid>
                </>
            )}
        </Layout>
    )
}

export default product