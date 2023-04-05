import React from "react";
import "./Hero.scss";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="app__hero">
      {isTabletOrMobile && (
        <div className="app__hero-mobile">
          <img src="images/image-hero-mobile.png" alt="hero image" />
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamine processes,
            create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
          <div className="app__hero-clients-mobile">
            {[
              "client-databiz.svg",
              "client-audiophile.svg",
              "client-meet.svg",
              "client-maker.svg",
            ].map((client) => (
              <img key={client} src={`images/${client}`} alt={client} />
            ))}
          </div>
        </div>
      )}
      <div className="app__hero-desktop">
        <div>
          <h1>
            Make
            <br />
            remote work
          </h1>
          <p>
            Get your team in sync, no matter your location. Streamine processes,
            create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
          <div className="app__hero-clients-desktop">
            {[
              "client-databiz.svg",
              "client-audiophile.svg",
              "client-meet.svg",
              "client-maker.svg",
            ].map((client) => (
              <img key={client} src={`images/${client}`} alt={client} />
            ))}
          </div>
        </div>
        <img src="images/image-hero-desktop.png" alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
