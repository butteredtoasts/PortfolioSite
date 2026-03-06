import PhotoLink from "../../reusable/PhotoLink/PhotoLink";
import FadeUp from "../../reusable/FadeUp/FadeUp";

import "./PhotoMain.css";

import MountainBoy from "../../../assets/Photography/Portraits/MountainBoy.jpg";
import BabyShower from "../../../assets/Photography/Events/BabyShower.jpg";

function PhotoMain() {
    const portraitsLink="/portfolio/photography/portraits";
    const eventsLink="/portfolio/photography/events";

    const portraitsLinkText="Portraits";
    const eventsLinkText="Events";

    return (
        <>
            <FadeUp delay={500}>
            <div className="photoTypeOptionsBox">
                <PhotoLink linkTo={portraitsLink} imageUsed={MountainBoy} linkText={portraitsLinkText} />
                <PhotoLink linkTo={eventsLink} imageUsed={BabyShower} linkText={eventsLinkText} />
            </div>
            </FadeUp>
        </>
    )
}

export default PhotoMain;