import React from "react"
import Layout from "../components/Layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import PageTitle from "../components/PageTitle"
const BlogList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  box-sizing: border-box;
  li {
    list-style-type: none;
    width: 40%;
    padding: 10px 15px;
    margin: 10px;
    background-color: #f5f5f4;
    box-shadow: 0 0.5em 1em -0.125em rgb(43 37 35 / 10%),
      0 0 0 1px rgb(43 37 35 / 2%);
    a {
      text-decoration: none;
      color: #f9024d;
      &:hover {
        color: #fe4400;
      }
    }
    p {
      span {
        margin-right: 5px;
        color: #f9024d;
      }
    }
  }

  // tablet screens
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    li {
      width: 42%;
      .excerpt {
        height: 60px;
        overflow: hidden;
      }
    }
  }
  // smartphones
  @media screen and (max-width: 767px) {
    flex-direction: column;
    li {
      width: 80%;
      .excerpt {
        height: 60px;
        overflow: hidden;
      }
    }
  }
  @media screen and (max-width: 480px) {
    padding: 2px;
    li {
      width: 90%;
    }
  }
`
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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {" "}
      <PageTitle title="Blogs Page" />
      <BlogList>
        {edges?.map(item => (
          <li>
            {" "}
            <Link to={`/blog/${item.node.fields.slug}`}>
              <h2>{item.node.frontmatter.title}</h2>
            </Link>
            <p className="excerpt">{item.node.excerpt}</p>
            <p>
              <span>
                <FontAwesomeIcon icon={faCalendarDay} />
              </span>
              {item.node.frontmatter.date}
            </p>
          </li>
        ))}
      </BlogList>
    </Layout>
  )
}

export default BlogPage
