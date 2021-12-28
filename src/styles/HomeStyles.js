import styled from "styled-components"
export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  padding-bottom: 50px;
  background-color: #f8f9fc;
  border-radius: 5%;
  .img-wrapper {
    height: 400px;
    img {
      border-radius: 100%;
      padding: 0;
      border: 14px solid #fff;
      width: 400px;
      height: 400px;
      box-shadow: 0 20px 40px rgb(0 0 0 / 10%),
        0 20px 40px hsl(0deg 0% 100% / 15%);
    }
  }
  .bio-wrapper {
    padding: 0 15px;
    align-self: flex-start;
    .inner {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      font-size: 1.6rem;
      line-height: 1.6;
      font-weight: 800;
      font-family: "Montserrat", sans-serif;
      .tags {
        color: #f9004d;
      }
    }
  }

  // tablet screens
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 20%;
    .img-wrapper {
      width: 350px;
      height: 350px;
      img {
        width: 320px;
        height: 320px;
      }
    }
    .bio-wrapper {
      font-size: 1.4rem;
      .sub-text {
      }
    }
  }
  // smartphones
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 15%;
    .img-wrapper {
      width: 350px;
      height: 350px;
      img {
        width: 320px;
        height: 320px;
      }
    }
    .bio-wrapper {
      font-size: 1.4rem;
      h2 {
        font-size: 1.6rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 10%;
    .img-wrapper {
      width: 300px;
      height: 300px;
      img {
        width: 240px;
        height: 240px;
      }
    }
    .bio-wrapper {
      font-size: 1.2rem;
      h2 {
        font-size: 1.4rem;
      }
    }
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  .git {
    &:hover {
      color: #000;
    }
  }
  svg {
    font-size: 40px;
    cursor: pointer;
    color: #f9004d;
    &:hover {
      color: #1685e8;
    }
  }
`
