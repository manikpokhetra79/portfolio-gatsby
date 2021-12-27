import React from "react"
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"
import manik_pic from "../assets/images/manik_pic.jpg"
import AboutStyles from "./AboutStyles"

const AboutPage = () => {
  return (
    <Layout>
      <PageTitle title="About" />
      <AboutStyles>
        <div className="img-wrapper">
          <img src={manik_pic} alt="my-pic" />
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
            <li>Video Games Learning.</li>
            <li>Gain new skills.</li>
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
