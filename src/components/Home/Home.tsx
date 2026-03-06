import FadeUp from "../FadeUp/FadeUp";

import "./Home.css"

import portraitA from "/src/assets/Self/Portrait A.jpg"
import portraitB from "/src/assets/Self/Portrait B.jpg"
import portraitC from "/src/assets/Self/Portrait C.jpg"

function Home() {
return (
        <>
        <FadeUp delay={550}>
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
        <FadeUp delay={550}>
            <div className="aboutMe">
                <p>
                    My name is Khondoker Tazwar Akber, but feel free to call me Tazz.
                    For the past few years, I've been a software engineer having worked
                    for various companies that showcases my expertise. I have a passion
                    for working with popular libraries and frameworks to produce
                    full-stack applications such as Spring Boot as well as
                    Angular and React.
                    <br></br><br></br>
                    Additionally, I spend my free time practicing photography and music
                    production. Whether it's programming, shooting a photo, making a
                    new song, or even creating content for social media, nothing is more
                    satisfying than completing the project. Take a look through my site
                    to see what I've accomplished over the past years.
                </p>
            </div>
        </FadeUp>
        </>
    )
}

export default Home;