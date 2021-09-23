import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Frontpageslider from "../components/Frontpageslider"
import Tagline from "../components/Tagline"

export default function Home() {
  return (
    <>
      <Layout>
        <Wrapper>
          <Tagline />
          <Frontpageslider />
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.section``
