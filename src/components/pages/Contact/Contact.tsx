import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import FadeUp from "../../reusable/FadeUp/FadeUp";

import "./Contact.css";

function Contact() {
    return (
        <>
            <div className="contactsList">
                <ul>
                    <FadeUp delay ={300}>
                    <li><FaEnvelope className="contactIcons" /><a href="mailto:tazwarakber@gmail.com">tazwarakber@gmail.com</a></li>
                    </FadeUp>
                    <FadeUp delay ={325}>
                    <li><FaPhone className="contactIcons" /><a href="tel:+15162637510">516-263-7510</a></li>
                    </FadeUp>
                    <FadeUp delay ={350}>
                    <li><FaLinkedin className="contactIcons" /><a href="https://www.linkedin.com/in/tazwar-akber/">LinkedIn</a></li>
                    </FadeUp>
                    <FadeUp delay ={375}>
                    <li><FaInstagram className="contactIcons" /><a href="https://www.instagram.com/tazzakber/?hl=en">@tazzakber</a></li>
                    </FadeUp>
                    <FadeUp delay ={400}>
                    <li><FaGithub className="contactIcons" /><a href="https://github.com/butteredtoasts">GitHub</a></li>
                    </FadeUp>
                </ul>
            </div>
        </>
    )
}

export default Contact;