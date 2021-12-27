import styled from "styled-components"
export const BlogContainer = styled.div`
  box-sizing: border-box;

  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
    letter-spacing: 1.2px;
    line-height: 1.5;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
  }
  ul {
    li {
      margin: 10px;
    }
  }
  ol {
    li {
      margin: 10px;
    }
  }
  .sub-info {
    display: flex;
    margin: 1.5rem 0;
    span {
      font-size: 1rem;
      margin-right: 10px;
    }
    svg {
      //  some styles
    }
  }
`
