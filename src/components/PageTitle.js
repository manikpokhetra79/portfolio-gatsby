import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScroll } from "@fortawesome/free-solid-svg-icons"
const Heading = styled.h1`
  color: #F9024D;
  svg {
    margin-left: 10px;
  }
  font-size: 30px;
  font-family: "Montserrat Subrayada", sans-serif;
`
const PageTitle = ({ title }) => {
  return (
    <Heading>
      {title}
      <FontAwesomeIcon icon={faScroll} />
    </Heading>
  )
}

export default PageTitle
