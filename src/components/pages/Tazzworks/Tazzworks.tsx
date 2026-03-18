import DevEntry from "../../reusable/DevEntry/DevEntry"

import "./Tazzworks.css"

import tazzworks from "/src/assets/Logos/tazzworks.png"
import tazzworksScreen from "/src/assets/TazzworksScreen.png"

import text1 from "./TazzworksText1.txt?raw"
import text2 from "./TazzworksText2.txt?raw"

function Tazzworks() {
    return (
        <>
        <DevEntry
            imageUsed={tazzworks}
            bodyText={text1}
        />
        <DevEntry
            imageUsed={tazzworksScreen}
            bodyText={text2}
        />
        </>
    )
}

export default Tazzworks;