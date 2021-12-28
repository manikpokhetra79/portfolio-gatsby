import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const NavBar = styled.header`
  background-color: #f5f5f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #f9024d;
  padding: 0 1.2rem;
  font-family: "Montserrat", sans-serif;
  a {
    text-decoration: none;
  }
  .active-link {
    color: #f9024d;
  }
  .title {
    color: #f9024d;
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
      margin: 2px 10px;

      a {
        font-size: 16px;
        color: #6e6d79;
        font-weight: 600;
        transition: all 0.3s;
        &:hover {
          color: #f9024d;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .title {
      font-size: 1.4rem;
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
        <p className="title">{data.title}</p>
      </Link>
      <ul>
        <li>
          <Link to="/" activeClassName="active-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="active-link">
            Blog
          </Link>
        </li>
      </ul>
    </NavBar>
  )
}

export default Header
