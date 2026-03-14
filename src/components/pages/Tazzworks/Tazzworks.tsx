import FadeUp from "../../reusable/FadeUp/FadeUp";

import "./Tazzworks.css";

import tazzworks from "/src/assets/Logos/tazzworks.png";
import tazzworksScreen from "/src/assets/TazzworksScreen.png";

function Tazzworks() {
    return (
        <>
        <FadeUp delay={300}>
        <div className="tazzworksBody">
            <div className="tazzworksInverter">
            <img src={tazzworks} />
            </div>
            <p>
                A blank webpage can be seen as its own
                medium for art. An empty canvas waiting
                to be filled by a developer's vision.
                When given a white screen waiting to be
                transformed, what can fill the space?
                The page is the canvas the way that the
                developer is the painter. Just substitute
                the paint supples with a monitor, keyboard,
                mouse, and an IDE.
                <br></br><br></br>
                Watching my page go from that white
                void into a full website with several
                pages of work I'm passionate about 
                is incredibly satisfying. I see this as
                a way to express not only my portfolio
                but also my ability to develop. If anything,
                that's the best part about this. It's
                not just a project for clients or for
                occupation, it's a project for me. I'm more
                than happy to get to share my work and the
                story of it all with you!
                <br></br><br></br>
            </p>
        </div>
        </FadeUp>
        <FadeUp delay={300}>
        <div className="tazzworksBody">
            <img src={tazzworksScreen} />
            <p>
                As straightforward as it is, this site is
                a clear example of my web development
                expertise. From designing the site from
                scratch to formatting for different
                viewports, this is a project I've been
                wanting to work on for a while now. Sure,
                I could've used any website builder to
                quickly show off all my photography and
                music, but why do that when I have the
                capacity to develop it myself? I have
                past professional experience in creating
                full-stack applications so I might as well
                apply it into a personal project.
            </p>
        </div>
        </FadeUp>
        </>
    )
}

export default Tazzworks;