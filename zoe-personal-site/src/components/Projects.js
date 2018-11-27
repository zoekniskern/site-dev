import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Projects extends Component {
    render() {
        const color = "#BE1E2D";
        return(
            <div className="">
                <h3>Development Projects</h3>
                <p>Below are some overviews of development projects that I have created! Click on the Github icon to view the repository.</p>
                <br/>
                <div className="card">
                    <img className="card-img-top" src="/assets/bechdel.jpg" alt="Bechdel Test"></img>
                    <div className="card-body">
                        <h3><a href="https://github.com/zoekniskern/kniskern_bechdel">Bechdel Test Visualization</a></h3>
                        <p>Based on the dataset from FiveThirtyEight's article <a href="https://fivethirtyeight.com/features/the-dollar-and-cents-case-against-hollywoods-exclusion-of-women/">The Dollar-And-Cents Case Against Hollywood’s Exclusion of Women</a>, this project re-examines female representation and characterization in film by year using the d3 library.</p>
                        <br/>
                        <p><i>Why I showcase this project:</i></p>
                        <p>I am proud of this project. Completed within a week, I was able to effectively tell a story that was enhanced by understandable visualizations.</p>
                        <SocialIcon color={color} url="https://github.com/zoekniskern/kniskern_bechdel" />
                    </div>
                </div>
                <br/>
                <div className="card">
                    <img className="card-img-top" src="/assets/breeder.jpg" alt="Art Breeder"></img>
                    <div className="card-body">
                        <h3><a href="https://github.com/zoekniskern/kniskern_geneticalgo">Art Breeder</a></h3>
                        <p>Applying a genetic algorithm to generated art with user subjectivity.</p>
                        <br/>
                        <p><i>Why I showcase this project:</i></p>
                        <p>My initial planning and scope of this project was effective and well-thought out. By deciding which artistic characteristics would be subject to the genetic algorithm, the implementation went smoothly.</p>
                        <SocialIcon color={color} url="https://github.com/zoekniskern/kniskern_geneticalgo" />
                    </div>
                </div>
                <br/>
                <div className="card">
                    <img className="card-img-top" src="/assets/fractal.jpg" alt="Fractal Rorschach"></img>
                    <div className="card-body">
                        <h3><a href="https://github.com/zoekniskern/kniskern_fractals">Fractal Rorschach</a></h3>
                        <p>Exploring a relationship between symmetry and fractals with html Canvas.</p>
                        <br/>
                        <p><i>Why I showcase this project:</i></p>
                        <p>While coding this project I was more focused on incorperating and exploring several specific concepts, but the outcome was surprisingly engaging.</p>
                        <SocialIcon color={color} url="https://github.com/zoekniskern/kniskern_fractals" />
                    </div>
                </div>
                <br/>
                <div className="card">
                    <img className="card-img-top" src="/assets/audio.jpg" alt="Audio Visualizer"></img>
                    <div className="card-body">
                        <h3><a href="https://github.com/zoekniskern/kniskern-audioviz">Audio Visualizer</a></h3>
                        <p>Leveraging the Web Audio API and html Canvas to generate music responsive visuals.</p>
                        <br/>
                        <p><i>Why I showcase this project:</i></p>
                        <p>I completed this project for my Rich Media 330 class and I'm specifically pleased with the math that went into calculating the tangent lines.</p>
                        <SocialIcon color={color} url="https://github.com/zoekniskern/kniskern-audioviz" />
                    </div>
                </div>
                <br/>
                <br/>
                {/* <h3>Collaborative Experiences</h3>
                <p>Below are some overviews of development projects that I have created! Click on the Github icon to view the repository.</p>
                <br/>
                <br/>
                <br/> */}
                <h3>Visual Design Highlights</h3>
                <p>Although the majority of my focus is on development work, I also create visuals for the Latin Rhythm Dance Club and the RIT Multicultural Center for Academic Success.</p>
                <div className="">
                    <Carousel dynamicHeight='true'>
                        <div>
                            <img src="/assets/design/CareerClothingFair_Poster.jpg" />
                            <p className="legend">I created this poster for the <a href="https://www.rit.edu/diversity/berns-closet-0">Bern's Closet</a> project where clothes are donated by RIT faculty, staff and Rochester community members and then give to students in need of professional clothing before the Career Fair. </p>
                        </div>
                        <div>
                            <img src="/assets/design/FamilyMeeting_Master.jpg" />
                            <p className="legend">The RIT Multicultural Center for Academic Success brings together the students who participate in their programming several times a semester at "Family Meetings". I designed these posters to highlight all the meeting dates for the semester.</p>
                        </div>
                        <div>
                            <img src="/assets/design/HHM_2018_11X17.jpg" />
                            <p className="legend">I designed this poster to advertise the Hispanic Heritage Month Kickoff event hosted by the RIT Division of Diversity and Inclusion.</p>
                        </div>
                        <div>
                            <img src="/assets/lrdc/shirt.jpg" />
                            <p className="legend">While serving on the <a href="https://www.facebook.com/LRDCRIT/?ref=page_internal">RIT Latin Rhythm Dance Club</a> student Executive Board, I was the primary graphics creator for all club events and merchandise. The club shirts, which I designed, were sold to both students and community partners.</p>
                        </div>
                        <div>
                            <img src="/assets/lrdc/socials-branding-fall.jpg" />
                            <p className="legend">I was LRDC's Events Coordinator for two years and then became the Vice President. I organizing the biannual social dancing event and created the branded graphic elements for them as well. These are a few pieces from the 2017 Fall Social materials.</p>
                        </div>
                        <div>
                            <img src="/assets/lrdc/socials-branding-spring.jpg" />
                            <p className="legend">This was my final social on the eboard and I coordinated the Jack and Jill portion of the event.</p>
                        </div>
                    </Carousel>
                </div>
                <br/>
            </div>

        )
    }
}