import FadeUp from "../../reusable/FadeUp/FadeUp";

import "./Header.css";

function Header() {
  return (
    <FadeUp delay={500}>
      <header className="headerBox">
        <h1 className="headerTitle">Tazzworks</h1>
        <h2 className="headerSubtitle">Developer, Photographer, Creator</h2>
      </header>
    </FadeUp>
  );
}

export default Header;