
import React from "react"
import Layout from '../components/layout/Layout'
import DeatilsProduct from "../components/layout/DeatilsProduct"
import useProduct from "../hooks/useProduct"
import styled from "@emotion/styled"

const UlContainer = styled.ul`
background: #f7f7f7;
min-height: 90vh;
padding-top: 25px;
`

export default function Home() {
  const {product} = useProduct("date")
  return (
    <div>
      <Layout>
        <div>
          <UlContainer>
            {product.map(data=>(
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
