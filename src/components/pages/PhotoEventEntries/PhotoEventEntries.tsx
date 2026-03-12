import PhotoEntry from "../../reusable/PhotoEntry/PhotoEntry";
import FadeUp from "../../reusable/FadeUp/FadeUp";

import "./PhotoEventEntries.css";

import w1 from "/src/assets/Photography/Events/Wedding1.jpg";
import w2 from "/src/assets/Photography/Events/Wedding2.jpg";
import w3 from "/src/assets/Photography/Events/Wedding3.jpg";
import w4 from "/src/assets/Photography/Events/Wedding4.jpg";
import wText from "./weddingText.txt?raw";

import bs1 from "/src/assets/Photography/Events/BabyShower1.jpg";
import bs2 from "/src/assets/Photography/Events/BabyShower2.jpg";
import bs3 from "/src/assets/Photography/Events/BabyShower3.jpg";
import bs4 from "/src/assets/Photography/Events/BabyShower4.jpg";
import bsText from "./babyShowerText.txt?raw";

function PhotoEventEntries() {
    const weddingImages = [w3, w4];
    const weddingHeader = "Grashanti";
    const weddingDate = "Date: May 14, 2025";
    const weddingFooter = [w1, w2];

    const babyShowerImages = [bs3, bs4];
    const babyShowerHeader = "Baby Shower";
    const babyShowerDate = "Date: June 15, 2025";
    const babyShowerFooter = [bs1, bs2];

    return (
        <>
            <div className="eventEntryBox">
                <FadeUp delay={300}>
                <PhotoEntry 
                    photos={weddingImages}
                    headerText={weddingHeader}
                    dateText= {weddingDate}
                    bodyText={wText}
                    footerPhotos={weddingFooter}
                />
                </FadeUp>
                <FadeUp delay={300}>
                <PhotoEntry 
                    photos={babyShowerImages}
                    headerText={babyShowerHeader}
                    dateText= {babyShowerDate}
                    bodyText={bsText}
                    footerPhotos={babyShowerFooter}
                />
                </FadeUp>
            </div>
        </>
    )
}

export default PhotoEventEntries;