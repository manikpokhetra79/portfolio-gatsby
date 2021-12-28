import React from "react"
import Layout from "../components/Layout"
import Metadata from "../components/metadata"
import PageTitle from "../components/PageTitle"
import manik2 from "../assets/images/manik2.jpeg"
import AboutStyles from "../styles/AboutStyles"

const AboutPage = () => {
  return (
    <Layout>
      {" "}
      <Metadata title="Home" description="This is my home page" />
      <PageTitle title="About" />
      <AboutStyles>
        <div className="img-wrapper">
          <img src={manik2} alt="my-pic" />
        </div>
        <div className="bio-wrapper">
          <h2>About Me : </h2>
          <p>
            Hi My name is <span className="sp-text">Manik Pokhetra</span> and I
            am a computer Science graduate with experience working across
            full-stack web development.
            <br />
            hy this lorem ipsum ? Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo
          </p>
          <h2>My interests</h2>
          <ul>
            <li>Blogging.</li>
            <li> Video Editing.</li>
            <li>Video Games.</li>
          </ul>
          <h2>My skills</h2>
          <ul>
            <li>Front End Design and Development.</li>
            <li>Back-end Development.</li>
            <li>lorem ipsum</li>
          </ul>
        </div>
      </AboutStyles>
    </Layout>
  )
}

export default AboutPage
