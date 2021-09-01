import React,{useEffect, useState} from "react"
import Layout from "../components/layout/Layout"
import {useRouter} from "next/router"
import DeatilsProduct from "../components/layout/DeatilsProduct"
import useProduct from "../hooks/useProduct"
import styled from "@emotion/styled"

const UlContainer = styled.ul`
background: #f7f7f7;
min-height: 90vh;
padding-top: 25px;
`

export default function serach() {
  const [resultContainer, setResultContainer] = useState([])
  const route = useRouter()
  const {query: {q}} = route
  const {product} = useProduct("date")
  useEffect(() => {
    if(q && product){
      const SearchContainer = q.toLowerCase();
      const Filter = product.filter(data =>{
        return(
          data.name.toLowerCase().includes(SearchContainer)|| data.description.toLowerCase().includes(SearchContainer)
        )
      })
      setResultContainer(Filter)
    }
  }, [q, product])
  console.log(resultContainer)
  return (
    <div>
      <Layout>
        <div>
          <UlContainer>
            {resultContainer && resultContainer.map(data=>(
              <DeatilsProduct
              data={data}
              key={data.id}
              />
            ))}
          </UlContainer>
        </div>
      </Layout>
    </div>
  )
}

