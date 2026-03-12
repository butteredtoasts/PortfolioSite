import "./UnderConstruction.css";

import pusheen from "/src/assets/pusheen.gif";

function UnderConstruction() {
    return (
        <>
            <div className="constructionBox">
                <h1>This page is still under construction!</h1>
                <img src={pusheen} />
            </div>
        </>
    )
}

export default UnderConstruction;