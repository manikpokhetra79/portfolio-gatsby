import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
const Container = styled.div`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`
const Content = styled.div`
  flex-grow: 1;
`
const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default Layout
