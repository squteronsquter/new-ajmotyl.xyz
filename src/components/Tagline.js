import React from "react"
import styled from "styled-components"

export default function Tagline() {
  return (
    <>
      <Wrapper>
        <h1>centrum piekarsko-cukierniczo-gastronomiczne</h1>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  h1 {
    color: #2a2a2a;
    font-weight: 300;
  }
`
