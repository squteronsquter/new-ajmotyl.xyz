import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()}. Developed by{" "}
          <a href="https://dms.codes/">Digital Mind Solutions LTD.</a>
        </p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 6rem;
  font-size: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: rgb(64, 73, 197);
  }
`
export default Footer
