import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../images/logo.svg"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
            <button className="nav-btn" onClick={() => setShow(!show)}>
              <FiAlignJustify />
            </button>
          </div>
          <div className={show ? "nav-links show-links" : "nav-links"}>
            <Link
              to="/"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              start
            </Link>
            <Link
              to="/oferta"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              oferta
            </Link>
            <Link
              to="/onas"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              o nas
            </Link>
            <Link
              to="/aktualnosci"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              aktualności
            </Link>
            <Link
              to="/szkolenia"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              szkolenia/warsztaty
            </Link>
            <Link
              to="/ofertypracy"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              oferty pracy
            </Link>
            <Link
              to="/kontakt"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              kontakt
            </Link>
          </div>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .logo {
    width: 80px;
  }
`

export default Navbar
