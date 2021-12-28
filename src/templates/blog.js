import React from "react"
import Layout from "../components/Layout"
import Metadata from "../components/metadata"
import { graphql } from "gatsby"
import { BlogContainer } from "./BlogDesign"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlasses, faCalendarDay } from "@fortawesome/free-solid-svg-icons"
import PageTitle from "../components/PageTitle"
export const query = graphql`
  query ($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      excerpt
      html
      timeToRead
    }
  }
`

const blog = props => {
  const { markdownRemark } = props.data
  return (
    <Layout>
      <Metadata
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.excerpt}
      />
      <BlogContainer>
        <PageTitle title={markdownRemark.frontmatter.title} />
        <div className="sub-info">
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{markdownRemark.frontmatter.date}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGlasses} />
            <span> {`${markdownRemark.timeToRead} min read`}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
      </BlogContainer>
    </Layout>
  )
}

export default blog
