import styled from "styled-components"
const AboutStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  line-height: 2;
  font-size: 16px;
  .img-wrapper {
    min-width: 40vw;
    max-width: 50vw;
    height: auto;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 5px;
      object-fit: fill;
      object-position: 50% 100%;
      transition: 0.5s ease-in-out;
      transform: scale(1);
      &:hover {
        transform: scaleX(-1);
      }
    }
  }
  // bio wrapper
  .bio-wrapper {
    padding: 0 15px;
    text-transform: capitalize;
    width: 45vw;
    .sp-text {
      color: #f9024d;
    }
    h2 {
      color: #f9024d;
      border-bottom: 5px solid #f9024d;
    }
    ul {
      list-style-type: square;
    }
  }

  // tablet screens
  @media screen and (min-width: 768px) and (max-width: 1023px) {
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
  // smartphones
  @media screen and (max-width: 767px) {
    flex-direction: column;
    .img-wrapper {
      max-width: 80vw;
      img {
        height: 80%;
      }
    }
    .bio-wrapper {
      width: 80vw;
    }
  }
  @media screen and (max-width: 480px) {
    .img-wrapper {
      max-width: 90vw;
    }
    .bio-wrapper {
      width: 90vw;
    }
  }
`
export default AboutStyles
