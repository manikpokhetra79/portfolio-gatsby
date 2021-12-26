import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
const FooterStyles = styled.footer`
  margin-top: 3rem;
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
      <p>Created by {data.author} © 2021</p>
    </FooterStyles>
  )
}

export default Footer
