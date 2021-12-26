import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const NavBar = styled.header`
  h2 {
    color: #333;
    font-family: cursive;
    letter-spacing: 2px;
  }
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    letter-spacing: 1.5px;
    font-family: Verdana;
    li {
      list-style-type: none;
      margin: 2px 8px;
      a {
        font-size: 18px;
        text-decoration: none;
        color: #000;
        font-weight: 500;
        &:hover {
          color: #0a7ac1;
        }
      }
    }
  }
`
const Header = () => {
  const {
    site: { siteMetadata: data },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)

  return (
    <NavBar>
      <Link to="/">
        {" "}
        <h2>{data.title}</h2>
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </NavBar>
  )
}

export default Header
