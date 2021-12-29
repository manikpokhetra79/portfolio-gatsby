import React from "react"
import Layout from "../components/Layout"
import Metadata from "../components/metadata"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
const Container404 = styled.div`
  text-align: center;
  color: #2196F3;
`
const BlogButton = styled.button`
  margin: 1rem;
  width: auto;
  background: transparent;
  font-size: 16px;
  border-color: #2196F3;
  border-style: solid;
  border-width: 2px;
  border-radius: 22px;
  padding: 10px 40px;
  text-transform: uppercase;
  transition: all 0.2s linear;
  cursor: pointer;
  color: #2196F3;
  a {
    text-decoration: none;
  }
  &:hover {
    color: white;
    background: #2196F3;
    border-color: white;
    transition: all 0.2s linear;
  }
`
const NotFound = () => {
  return (
    <Layout>
      {" "}
      <Metadata title="404" description="Page not found" />
      <Container404>
        <h1>404: Page Not Found</h1>
        <StaticImage
          src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="404_error"
          width={500}
          height={400}
        />

        <br />
        <Link to="/blog">
          <BlogButton> Check our latest blogs</BlogButton>
        </Link>
        <br />
        <Link to="/blog">
          <BlogButton> Go back to Home</BlogButton>
        </Link>
      </Container404>
    </Layout>
  )
}

export default NotFound
