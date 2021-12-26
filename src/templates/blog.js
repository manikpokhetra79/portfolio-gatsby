import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
export const query = graphql`
  query ($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const BlogPost = styled.article``
const blog = props => {
  const { markdownRemark } = props.data
  return (
    <Layout>
      <BlogPost>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <p>{markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
      </BlogPost>
    </Layout>
  )
}

export default blog
