import { Link } from "react-router-dom"

import "./PhotoLink.css"

type PhotoLinkProps = {
    linkTo: string;
    imageUsed: string;
    linkText: string;
};

function PhotoLink({linkTo, imageUsed, linkText}: PhotoLinkProps) {
    return (
        <>
            <div className="linkBox">
                <Link to={linkTo}>
                    <img src={imageUsed} alt="Photo link to Portraits page" className="photoLinkImage" />
                    <p className="portfolioLinkText">{linkText}</p>
                </Link>
            </div>
        </>
    )
}

export default PhotoLink;