import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="bottom-navbar">
        <div className="bottom-nav-links">
          <Link
            to="/rodo"
            className="bottom-nav-link"
            activeClassName="active-link"
          >
            rodo
          </Link>

          <Link
            to="/szkolenia"
            className="bottom-nav-link"
            activeClassName="active-link"
          >
            szkolenia/warsztaty
          </Link>

          <Link
            to="/newsletter"
            className="bottom-nav-link"
            activeClassName="active-link"
          >
            newsletter
          </Link>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  .bottom-navbar {
    display: flex;
    justify-content: start;
    padding: 0 4em;
    align-items: center;
    height: 4em;
  }
  .bottom-nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    color: #2a2a2a;
    padding: 0.5em 1em;
  }
  .active-link {
    color: rgb(64, 73, 197);
  }
`

export default Navbar
