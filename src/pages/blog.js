import React from "react"
import Layout from "../components/Layout"
import { Link, useStaticQuery, graphql } from "gatsby"
const BlogPage = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              author
            }
            excerpt
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol>
        {edges?.map(item => (
          <li>
            {" "}
            <Link to={`/blog/${item.node.fields.slug}`}>
              <h2>{item.node.frontmatter.title}</h2>
            </Link>
            <h4>{item.node.excerpt}</h4>
            <p>{item.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
