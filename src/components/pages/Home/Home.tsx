import FadeUp from "../../reusable/FadeUp/FadeUp"

import "./Home.css"

import portraitA from "/src/assets/Self/Portrait A.jpg"
import portraitB from "/src/assets/Self/Portrait B.jpg"
import portraitC from "/src/assets/Self/Portrait C.jpg"

function Home() {
return (
        <>
        <FadeUp delay={300}>
            <div className="homePhotosRow">
                <div>
                    <img src={portraitA} className="homePortaitA" alt="Photo #1 of me" />
                </div>
                <div>
                    <img src={portraitB} className="homePortaitB" alt="Photo #1 of me" />
                </div>
                <div>
                    <img src={portraitC} className="homePortaitC" alt="Photo #1 of me" />
                </div>
            </div>
        </FadeUp>
        <FadeUp delay={300}>
            <div className="aboutMe">
                <p>
                    I have considered myself for a creative for some time now. For the
                    past few years, I've been a software engineer, a photographer, a
                    producer, and now getting into video editing. I enjoy finding myself
                    working from scratch to complete a project. Nothing is more inspiring
                    than an empty screen waiting to be filled. Take this website for example.
                    It started as an empty white canvas of pixels that's been shaped into
                    what you're seeing now.
                    <br></br><br></br>
                    My name is Khondoker Tazwar Akber, but feel free to call me Tazz. I've
                    had the privilege to follow my interests and wanted to share my
                    accomplishments with others. I hope that it can be a form of inspiration
                    for someone to take their first steps into art they too can be proud of.
                    Everybody has to start somewhere. I may have a portfolio on the smaller side
                    for individual mediums, but it all comes together to be one big display
                    of practice and studying extensively.
                    <br></br><br></br>
                    Whether it's programming, shooting photos, making a
                    new song, or even creating content for social media, nothing is more
                    satisfying than completing the project. Take a look through my site
                    to see what I've accomplished over the past years. I intend on adding more
                    of my work as I go.
                </p>
            </div>
        </FadeUp>
        </>
    )
}

export default Home;