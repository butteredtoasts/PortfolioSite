import PhotoEntry from "../../reusable/PhotoEntry/PhotoEntry";
import FadeUp from "../../reusable/FadeUp/FadeUp";

import "./PhotoPortraitEntries.css";

import MountainBoy from "/src/assets/Photography/Portraits/MountainBoy.jpg";
import MountainBoy1 from "/src/assets/Photography/Portraits/MountainBoy1.jpg";
import MountainBoy2 from "/src/assets/Photography/Portraits/MountainBoy2.jpg";
import MountainBoy3 from "/src/assets/Photography/Portraits/MountainBoy3.jpg";
import MountainBoy4 from "/src/assets/Photography/Portraits/MountainBoy4.jpg";
import MountainBoyText from "./mountainText.txt?raw";

import Girl from "/src/assets/Photography/Portraits/Girl.jpeg";
import Girl1 from "/src/assets/Photography/Portraits/Girl1.jpg";
import Girl2 from "/src/assets/Photography/Portraits/Girl2.jpg";
import Girl3 from "/src/assets/Photography/Portraits/Girl3.jpg";
import girlText from "./girlText.txt?raw";

import Gab from "/src/assets/Photography/Portraits/Gab.jpg";
import Gab1 from "/src/assets/Photography/Portraits/Gab1.jpg";
import Gab2 from "/src/assets/Photography/Portraits/Gab2.jpg";
import Gab3 from "/src/assets/Photography/Portraits/Gab3.jpg";
import gabText from "./gabText.txt?raw";

function PhotoPortraitEntries() {
    const mountainBoyImages = [MountainBoy1, MountainBoy2, MountainBoy3];
    const mountainBoyFooter = [MountainBoy, MountainBoy4];
    const mountainBoyHeader = "Eren Yeager on Bear Mountain";
    const mountainBoyDate = "Date: Oct 23, 2022";

    const girlImages = [Girl, Girl3];
    const girlFooter = [Girl1, Girl2];
    const girlHeader = "For the Holidays";
    const girlDate = "Dec 22, 2024";

    const gabImages = [Gab, Gab1];
    const gabFooter = [Gab2, Gab3];
    const gabHeader = "Shine Bright";
    const gabDate = "Nov 6, 2025";

    return (
        <>
        <div className="portraitEntryBox">
            <FadeUp delay={300}>
            <PhotoEntry 
                photos={mountainBoyImages}
                headerText={mountainBoyHeader}
                dateText= {mountainBoyDate}
                bodyText={MountainBoyText}
                footerPhotos={mountainBoyFooter}
            />
            </FadeUp>
            <FadeUp delay={300}>
            <PhotoEntry
                photos={girlImages}
                headerText={girlHeader}
                dateText={girlDate}
                bodyText={girlText}
                footerPhotos={girlFooter}
            />
            </FadeUp>
            <FadeUp delay={300}>
            <PhotoEntry
                photos={gabImages}
                headerText={gabHeader}
                dateText={gabDate}
                bodyText={gabText}
                footerPhotos={gabFooter}
            />
            </FadeUp>
        </div>
        </>
    )
}

export default PhotoPortraitEntries;