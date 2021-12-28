import styled from "styled-components"
export const BlogContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: 2rem;

  p {
    font-size: 1rem;
    letter-spacing: 1.2px;
    line-height: 1.5;
  }
  img {
    border-radius: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  a {
    text-decoration: none;
    color: #d44101;
  }
  hr {
    border-color: #eee;
  }

  blockquote {
    border-left: 10px solid #e3e3e3;
    padding-left: 2rem;
    p {
      font-size: 1rem;
    }
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
  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 16px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    code {
      padding: 0;
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      border-radius: 0;
    }
  }
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
  }
  table {
    border-collapse: collapse;
    max-width: 100%;
    font-size: 0.9rem;
    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    tr {
      &:nth-child(even) {
        background-color: #f2f2f2;
      }
      &:hover {
        background-color: #ddd;
      }
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #d44101;
      color: white;
      font-size: 1rem;
    }
  }

  // custom classes
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

  // desktop queries
  @media screen and (min-width: 1024px) {
    width: 90%;
    margin: auto;
    h1 {
      // font-size: 1.8rem;
    }
    h2 {
      // font-size: 1.6rem;
    }
    h3 {
      // font-size: 1.4rem;
    }
    h4 {
      // font-size: 1.2rem;
    }
  }
  // tablet screens
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
    margin: auto;
    line-height: 2.5;
    ul,
    ol {
      li {
        margin: 5px;
      }
    }
  }
  // smartphones
  @media screen and (max-width: 767px) {
    p {
      font-size: 16px;
    }
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    h5 {
      font-size: 1.1rem;
    }
    h6 {
      font-size: 1rem;
    }
    img {
      border: 1px dotted black;
      margin: 10px auto;
      width: 60%;
    }
    blockquote {
      margin: 0 0.6rem;
      border-left: 5px solid #e3e3e3;
      padding-left: 0.8rem;
      p {
        font-size: 16px;
      }
    }
  }
`
