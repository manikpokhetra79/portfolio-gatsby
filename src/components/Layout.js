import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import "../styles/style.css"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Content = styled.div`
  flex-grow: 1;
  padding: 2rem;
  font-family: "Montserrat", sans-serif;
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
