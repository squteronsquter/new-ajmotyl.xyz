import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
// import SEO from "../components/SEO"
import Slider from "../components/Slider"

const Error = () => {
  return (
    <Layout>
      {" "}
      <Wrapper>
        <Slider className="slider" />
        {/* <SEO title="Error" /> */}
        <main className="error-page">
          <section className="erropagecontainer">
            <h1>404</h1>
            <h3>Nie ma takiej strony</h3>
          </section>
        </main>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  h1 {
    margin: 0;
    padding: 0;
  }
`

export default Error
