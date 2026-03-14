import FadeUp from "../../reusable/FadeUp/FadeUp";

import "./Regeneron.css";

import regeneronLogo from "/src/assets/Logos/regeneron.png";
import award from "/src/assets/RegeneronAward.jpg";
import tides from "/src/assets/TIDES.jpg";
import extra from "/src/assets/Self/RegeneronExtra.jpg";

function Regeneron() {
    var regeneronLink =
    "https://www.bio-itworld.com/news/2024/03/19/2024-innovative-practices-winners-in-informatics-collaboration-clinical-it-genomics";

    return (
        <>
            <FadeUp delay={300}>
            <div className="regeneronBody">
                <img src={regeneronLogo} />
                <p> 
                    I worked at Regeneron for a year and a half. I worked within
                    the Research IT department primarily with a team known as <b>TIDES: </b>
                    Transforming Information with Digital Experimental Solutions. I used
                    a wide variety of tools and languages at this position that truly
                    diversified what I'm capable of. I started with the notion that I'll
                    be working on backend development, but I ended up on the team that
                    was focused on improving the efficiency of the scientists. My work
                    directly contributed to Regeneron receiving the{" "}
                    <a href={regeneronLink}>Innovative Practices Award at Bio-IT World 2024</a>!
                    <br></br><br></br>
                    There's a sense of accomplishment to be felt when I worked in the
                    pharmaceutical industry. This isn't just putting an application
                    together, it's assisting researchers in advancing medicine. I felt
                    true pride in the work I completed. There was even more joy in seeing
                    researchers happy with my applications and making their work easier.
                </p>
            </div>
            </FadeUp>
            <FadeUp delay={300}>
            <div className="regeneronBody">
                <img src={award} />
                <p>
                    So what did I actually do? As the TIDES name suggests, I worked on
                    new forms of data capture and processing for experiments conducted
                    by the company. Researchers across various departments i.e.
                    Ophthalmology, Cardio, Services, etc. had difficulty translating
                    data from their experiments into their devices. For example, the
                    Opthalmology team was recording hours long voice memos during their
                    tests to later transcribe that memo into Excel at their desk while
                    listening to it at double speed. That's several hours a week wasted
                    on just transcription of data that should only need to be recorded once.
                    Their next best option, if best can be used, was the "human robot" where
                    a second researcher would sit alongside the first one and record the
                    data for them. The problem is the same but instead of putting the wasted
                    transcription hours into one researcher it's handing it off to another.
                    <br></br><br></br>
                    My team's solution to this was <a href="https://www.labvoice.ai">LabVoice</a>
                    , a JavaScript-based NLP tool built specifically for scientists to target
                    this exact problem and much more. I designed and implemented several workflows
                    that allowed researchers to simply speak into a device and immediately
                    upload their data into formatted and organized Excel sheets. Every workflow
                    was built with the user in mind using detailed constraints ensuring that I
                    followed their naming conventions and formatting. This way it was not an
                    intrusive addition to their and only an improvment.
                </p>
            </div>
            </FadeUp>
            <FadeUp delay={300}>
            <div className="regeneronBody">
                <img src={tides} />
                <p>
                    Additionally, I used Power Platform to modernize the animal census
                    process. What was originally done on paper is now done digitally
                    using Power Apps and Power BI. The original process required several
                    layers of transcription which was error-prone and time-consuming
                    between each hand off. By the time any report reached the proper
                    department, it's already days late and the next order of animals
                    was going to be inaccurate leading to either a surplus or a shortage.
                    Now the data, discrepancies, and accurate timestamps are automatically
                    handled with less steps in between.
                    <br></br> <br></br>
                    It has become much easier to track KPIs through my work. Every
                    record of data that gets passed from both my LabVoice workflows and
                    Power Platform applications comes with unique IDs, the user,
                    timestamps, processes done, and much more making it very easy to
                    monitor efficiency. It's a business analyst's dream to receive my
                    applications' data.
                </p>
            </div>
            </FadeUp>
            <FadeUp delay={300}>
            <div className="regeneronBody">
                <img src={extra} />
                <p>
                    Extra silly photo just because. Thank you for reading all that.
                </p>
            </div>
            </FadeUp>
        </>
    )
}

export default Regeneron;