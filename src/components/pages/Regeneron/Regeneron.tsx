import DevEntry from "../../reusable/DevEntry/DevEntry";

import "./Regeneron.css";

import regeneronLogo from "/src/assets/Logos/regeneron.png";
import award from "/src/assets/RegeneronAward.jpg";
import tides from "/src/assets/TIDES.jpg";
import extra from "/src/assets/Self/RegeneronExtra.jpg";

import regText1 from "./regeneronText1.txt?raw";
import regText2 from "./regeneronText2.txt?raw";
import regText3 from "./regeneronText3.txt?raw";
import regText4 from "./regeneronText4.txt?raw";

function Regeneron() {
    return (
        <>
            <DevEntry
                imageUsed={regeneronLogo}
                bodyText={regText1}
            />
            <DevEntry
                imageUsed={award}
                bodyText={regText2}
            />
            <DevEntry
                imageUsed={tides}
                bodyText={regText3}
            />
            <DevEntry
                imageUsed={extra}
                bodyText={regText4}
            />
        </>
    )
}

export default Regeneron;