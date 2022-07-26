import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import About from '../pages/About'
import Services from '../pages/Services'
import Projects from '../pages/Projects'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import Skill from '../pages/Skill'
// import TypeWriter from "react-typewriter";
import Typing from 'react-typing-animation';




function Home() {
    return (
        <>
            <section className="homepage d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1 homepage_text_container d-flex justify-content-center flex-column">
                                    <span className="hello_text">Hello! I'm</span>
                                    {/* <TypeWriter typing={0.3} className="my_name_text">SM Abtahi Noor</TypeWriter> */}
                                    <Typing>
                                        <h1 className="my_name_text">SM Abtahi Noor</h1>
                                    </Typing>
                                    <h3 className="subtile_designation">Frontend Web Developer</h3>

                                    <div className="follow_resources">
                                        <h4 className="follow_text">Follow Me</h4>
                                        <div className="socail_medias">
                                            <a href="https://www.facebook.com/abtahinoorsm" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                                            <a href="https://www.instagram.com/smabtahinoor" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                                            <a href="https://www.twitter.com/smabtahinoor" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                                            <a href="https://www.linkedin.com/smabtahinoor" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                                            <a href="https://www.github.com/19smabtahinoor" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                                        </div>
                                    </div>

                                    <NavLink to="/contact" className="hire_text">
                                        <Button className="mt-5 hire_btn">Hire me</Button>
                                    </NavLink>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 mt-5 homepage_image">
                                    <img src="https://i.ibb.co/drdRr7p/Developer-activity-bro.png" className="img-fluid" alt="homepageimage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Skill/>
            <Projects />
            <Gallery />
            <Contact />
        </>
    );
}

export default Home;