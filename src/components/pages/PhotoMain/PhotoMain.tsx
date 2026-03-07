import PhotoLink from "../../reusable/PhotoLink/PhotoLink";
import FadeUp from "../../reusable/FadeUp/FadeUp";

import "./PhotoMain.css";
import aboutPhotosText from "./aboutPhotos.txt?raw";

import MountainBoy from "../../../assets/Photography/Portraits/MountainBoy.jpg";
import BabyShower from "../../../assets/Photography/Events/BabyShower.jpg";

import photoshoot1 from "../../../assets/Self/Photoshoot1.jpeg";
import photoshoot2 from "../../../assets/Self/Photoshoot2.jpeg";

function PhotoMain() {
  const portraitsLink = "/portfolio/photography/portraits";
  const eventsLink = "/portfolio/photography/events";

  const portraitsLinkText = "Portraits";
  const eventsLinkText = "Events";

  return (
    <>
      <FadeUp delay={500}>
        <div className="photoTypeOptionsBox">
          <PhotoLink
            linkTo={portraitsLink}
            imageUsed={MountainBoy}
            linkText={portraitsLinkText}
          />
          <PhotoLink
            linkTo={eventsLink}
            imageUsed={BabyShower}
            linkText={eventsLinkText}
          />
        </div>
      </FadeUp>
      <FadeUp delay={600}>
        <div className="photoAboutFlexBox">
          <div className="photographyAboutBox">
            <h2 className="photoAboutHeader">About My Photography</h2>
            <p
              className="photoAboutText"
              dangerouslySetInnerHTML={{ __html: aboutPhotosText }}
            ></p>
          </div>
          <div className="cameraPhotos">
            <img src={photoshoot1} />
            <img src={photoshoot2} />
          </div>
        </div>
      </FadeUp>
    </>
  );
}

export default PhotoMain;
