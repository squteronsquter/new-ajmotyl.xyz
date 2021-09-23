import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export default function Slider() {
  return (
    <>
      <Wrapper>
        <StaticImage src="../images/slider_img02.jpg" alt="AJMotyl" />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section``
