import { Link } from "react-router-dom";

import "./PortfolioSelector.css";
import FadeUp from "../../reusable/FadeUp/FadeUp";

function PortfolioSelector() {
  return (
    <>
      <FadeUp delay={300}>
        <div className="portfolioButtons">
          <Link to="/portfolio/dev" className="portfolioButtonSingle">
            Development
          </Link>
          <Link to="/portfolio/photography" className="portfolioButtonSingle">
            Photography
          </Link>
          <Link to="/portfolio/music" className="portfolioButtonSingle">
            Music
          </Link>
          <Link to="/portfolio/content" className="portfolioButtonSingle">
            Content
          </Link>
        </div>
      </FadeUp>
    </>
  );
}

export default PortfolioSelector;
