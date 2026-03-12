import PhotoLink from "../../reusable/PhotoLink/PhotoLink";
import FadeUp from "../../reusable/FadeUp/FadeUp";

import "./Development.css";

import regeneron from "/src/assets/Logos/regeneron.png";
import tazzworks from "/src/assets/Logos/tazzworks.png";
import mythicalFood from "/src/assets/vitafruit.png";

function Development() {
    const regeneronLink = "/portfolio/dev/regeneron";
    const tazzworksLink = "/portfolio/dev/tazzworks";
    const mythicalLink = "/portfolio/dev/mythicalfood";

    const regeneronLinkText = "Regeneron";
    const tazzworksLinkText = "Tazzworks";
    const mythicalLinkText = "Mythical Food";

    return (
        <>
        <div className="devLinkOptionsBox">
            <FadeUp delay={300}>
            <PhotoLink 
                imageUsed={regeneron}
                linkTo={regeneronLink}
                linkText={regeneronLinkText}
            />
            </FadeUp>
            <div className="tazzworksInverter">
            <FadeUp delay={350}>
            <PhotoLink 
                imageUsed={tazzworks}
                linkTo={tazzworksLink}
                linkText={tazzworksLinkText}
            />
            </FadeUp>
            </div>
            <FadeUp delay={400}>
            <PhotoLink 
                imageUsed={mythicalFood}
                linkTo={mythicalLink}
                linkText={mythicalLinkText}
            />
            </FadeUp>
        </div>
        </>
    )
}

export default Development;