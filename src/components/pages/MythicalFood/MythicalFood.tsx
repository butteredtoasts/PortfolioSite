import DevEntry from "../../reusable/DevEntry/DevEntry"

import "./MythicalFood.css"

import vitafruit from "/src/assets/vitafruit.png"
import airfruit from "/src/assets/airfruit.png"

import foodText1 from "./mythicalFood1.txt?raw"
import foodText2 from "./mythicalFood2.txt?raw"

function MythicalFood() {
    return (
        <>
        <div className="mythicalFoodEntry">
            <DevEntry
                imageUsed={vitafruit}
                bodyText={foodText1}
            />
            <DevEntry
                imageUsed={airfruit}
                bodyText={foodText2}
            />
        </div>
        </>
    )
}

export default MythicalFood;