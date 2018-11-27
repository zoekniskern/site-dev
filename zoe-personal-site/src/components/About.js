import React, { Component } from "react";
import YouTube from 'react-youtube';
import '../App.css';

export default class About extends Component {
    render() {

        //Video
        //https://www.youtube.com/watch?v=Lev9s2FDBxo
        const vidID = "Lev9s2FDBxo";
        const opts = {
            height: '100%',
            width: '100%',
          };

        return(
            <div className="">
                <img src="/assets/whale.jpg" className="mx-auto d-block about-fluid about-images" alt="Whale illustration"></img>
                <h3>Hello,</h3>
                <p className="">My name is Zoe Kniskern and welcome to my website! Take a look at some of my work or read below to learn more about me.</p>
                <h5>On the grind...</h5>
                <p className="">I am a 5th year New Media Interactive Development student at the Rochester Institute of Technology – but what else? I began college as an Industrial Designer but after attending FITC Toronto in 2015 and 2016, and hearing from speakers such as <a href="https://www.ted.com/talks/jared_ficklin_new_ways_to_see_music_with_color_and_fire/up-next">Jared Ficklin</a>, I became fascinated with the technical side of interactive art. Putting my “creative designer” and “logical problem solver” skills together is proving to be a satisfying, exciting and fruitful endeavor!</p>
                <p className="">I chose an immersion in <a href="https://www.rit.edu/programs/immersions/digital-literatures-and-comparative-media">digital literature and comparative media</a> because the intersection of narrative and digital space is at the heart of interactive installations, exhibit design, and generative art – fields I am passionate about.</p>
                <br/>
                <img src="/assets/feet.jpg" className="mx-auto d-block about-fluid about-images" alt="my feet on the beach"></img>
                <h5>Looking to the future...</h5>
                <p className="">During my co-ops I’ve worked on agile and waterfall projects and have dealt with balancing the competing interests of business owners, designers and software developers. My artistic background and degree emphasize creative and technical knowledge, but I value good communication and management skills just as much. Managers who know how to deliver solutions by converging talent and technology enable individuals to focus rather than become distracted by process and logistics. </p>
                <p className="">I want to work in the exciting and evolving field of Interactive Development from either a development or a product manager perspective. From interactive conferences like SXSW to museum exhibits or interactive art installations – wherever experimentation and ingenuity are pushing limits, combining physical and digital interfaces and engaging audiences – that’s where you’ll find me. So many other fields such as advertising, healthcare and education have the opportunity to leverage new technology and I would love to help pioneer in those spaces as well.</p>
                <br/>
                
                <h5>More than just a degree...</h5>
                <div className="row">
                    <div className="col-md-6">
                        <p className="">Throughout my life I’ve worked hard to maintain personal hobbies in addition to my work. I am a lover of musical theater, drawing and Latin Dance to mention a few.</p>
                        <p className="">Some accomplishments I’m proud of include: speaking at TEDx Springfield in December 2014, finishing in the top six couples at 2017’s Boston Brazilian Dance Festival, and most recently, being accepted into the Transnational Workshop collaboration between the University of Paris 8 and RIT where we’re creating interactive installations for display at Montparnasse in January 2019.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="/assets/teaching.jpg" className="about-fluid" alt="teaching at the LRDC Social"></img>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-5">
                        <YouTube videoId={vidID} opts={opts}/>
                    </div>
                    <div className="col-md-7">
                        <p className="">If you’re curious about these, or other adventures, have a book recommendation, or just want to say “hello”, feel free to email me at zxk3766@rit.edu!</p>
                    </div>
                </div>
                    
                
            </div>
        )
    }
}