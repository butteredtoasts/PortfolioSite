import FadeUp from "../FadeUp/FadeUp";

import "./DevEntry.css";

type DevProps = {
    imageUsed: string,
    bodyText: string;
}

function DevEntry({imageUsed, bodyText}: DevProps) {
    return (
        <>
        <FadeUp delay={300}>
        <div className="devBodyText">
            <img src={imageUsed} />
            <p dangerouslySetInnerHTML={{ __html: bodyText }} ></p>
        </div>
        </FadeUp>
        </>
    )
}

export default DevEntry;