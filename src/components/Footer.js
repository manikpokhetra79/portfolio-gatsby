import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const FooterStyles = styled.footer`
  border-top: 3px solid #f9024d;
  padding: 10px;
  background-color: #141619;
  color: #b9babb;
  font-family: "Montserrat", sans-serif;
  .foot-inner-container {
    padding: 0 10px;
    font-size: 16px;
    span {
      color: #f9024d;
      font-weight: 800;
    }
  }
`
const Footer = () => {
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
    <FooterStyles>
      <div className="foot-inner-container">
        <p>
          Created by <span>{data.author} </span>© 2021
        </p>
      </div>
    </FooterStyles>
  )
}

export default Footer
