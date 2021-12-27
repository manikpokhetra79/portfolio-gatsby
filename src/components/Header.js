import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const NavBar = styled.header`
  background-color: #f5f5f4;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f4;
  padding: 0 1.2rem;
  font-family: "Montserrat", sans-serif;
  a {
    text-decoration: none;
  }
  h2 {
    color: #d44101;
    font-family: cursive;
    padding-bottom: 2px;
    font-size: 30px;
  }
  // list styles //
  ul {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    li {
      list-style-type: none;
      margin: 2px 8px;
      a {
        font-size: 18px;
        color: #6e6d79;
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
