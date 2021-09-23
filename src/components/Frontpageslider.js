import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export default function Frontpageslider() {
  return (
    <>
      <Wrapper>
        <StaticImage src="../images/slider_img01.jpg" alt="AJMotyl" />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section``
