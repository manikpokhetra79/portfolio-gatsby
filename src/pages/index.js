import React from "react"
import Layout from "../components/Layout"
import Metadata from "../components/metadata"
import manik2 from "../assets/images/manik2.jpeg"
import { HomeContainer, SocialIcons } from "../styles/HomeStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
export default function Home() {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <HomeContainer>
        <div className="img-wrapper">
          <img src={manik2} alt="my-pic" />
        </div>
        <div className="bio-wrapper">
          <p className="sub-text">Welcome to my Portfolio website</p>
          <div class="inner text-left">
            <h2 class="title">
              Hi,&nbsp;
              <span>
                <img
                  className="hi-pic"
                  src="https://c.tenor.com/2UVnszq99aIAAAAi/epic-pog.gif"
                  alt="hi"
                />
              </span>
              &nbsp; I’m Manik Pokhetra , <br />
              <span className="tags">Web Developer.</span>
              <br />
              <span>based in India.</span>
            </h2>
          </div>
        </div>
      </HomeContainer>
      <SocialIcons>
        <a
          href="https://github.com/manikpokhetra79"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon className="git" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/manikpokhetra79/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://www.facebook.com/CYB3RCX/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com/cyb3rcx"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </SocialIcons>
    </Layout>
  )
}
