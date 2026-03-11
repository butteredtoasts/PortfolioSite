import { PhotoImageSlider } from "../PhotoImageSlider/PhotoImageSlider";

import "./PhotoEntry.css";

type PhotoEntryProps = {
    photos: string[],
    headerText: string,
    dateText: string,
    bodyText: string,
    footerPhotos: string[];
}

function PhotoEntry({photos,  headerText, dateText, bodyText,footerPhotos}: PhotoEntryProps) {
    return(
        <>
        <div className="photoEntryBox">
            <div className="photoEntryMain">
                <PhotoImageSlider imageUrls={photos} />
                <div className="photoEntryTextBoxes">
                    <h1>{headerText}</h1>
                    <h2>{dateText}</h2>
                    <p dangerouslySetInnerHTML={{ __html: bodyText }} ></p>
                </div>
            </div>
            <div className="photoEntryFooter">
                <img src={footerPhotos[0]} />
                <img src={footerPhotos[1]} />
            </div>
        </div>
        </>
    )
}

export default PhotoEntry;