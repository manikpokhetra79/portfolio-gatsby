import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const FooterStyles = styled.footer`
  margin-top: 3rem;
  padding: 10px;
  background-color: #141619;
  color: #b9babb;
  font-family: "Montserrat", sans-serif;
  .foot-inner-container {
    padding: 0 10px;
    font-size: 16px;
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
        <p>Created by {data.author} © 2021</p>
      </div>
    </FooterStyles>
  )
}

export default Footer
