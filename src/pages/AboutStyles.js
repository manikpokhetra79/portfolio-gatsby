import styled from "styled-components"
const AboutStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  line-height: 2;
  font-size: 14px;
  .img-wrapper {
    min-width: 40vw;
    max-width: 50vw;
    height: 600px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 5px;
      object-fit: cover;
      object-position: 70% 100%;
      transition: 0.5s ease-in-out;
      transform: scale(1);
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  // bio wrapper
  .bio-wrapper {
    padding: 0 15px;
    text-transform: capitalize;
    width: 45vw;
    .sp-text {
      color: #dd4101;
    }
    h2 {
      color: #d44101;
      border-bottom: 5px solid #d44101;
    }
    ul {
      list-style-type: square;
    }
  }

  @media screen and (max-width: 798px) {
    flex-direction: column;
    align-items: center;

    // img wrapper
    .img-wrapper {
      max-width: 80vw;
    }

    // bio-wrapper
    .bio-wrapper {
      width: 80vw;
    }
  }
`
export default AboutStyles
