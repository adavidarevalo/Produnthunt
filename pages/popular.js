
import React from "react"
import Layout from '../components/layout/Layout'

import DeatilsProduct from "../components/layout/DeatilsProduct"

import styled from "@emotion/styled"
import useProduct from "../hooks/useProduct"

const UlContainer = styled.ul`
background: #f7f7f7;
min-height: 90vh;
padding-top: 25px;
`

export default function Popular() {
  const {product} = useProduct("votes")
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
