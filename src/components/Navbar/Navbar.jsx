import React, { useState } from "react";
import "./Navbar.scss";
import { useMediaQuery } from "react-responsive";

export const FeaturesList = ({
  setIsMenuPanelOpen,
  setIsFeaturesOpen,
  setIsCompanyOpen,
  isTabletOrMobile,
}) => (
  <ul
    className={`app__navbar-featureslist-${
      isTabletOrMobile ? "mobile" : "desktop"
    }`}
  >
    {["todo list", "calendar", "reminders", "planning"].map(
      (item, itemIndex) => (
        <li key={item}>
          {[
            "icon-todo.svg",
            "icon-calendar.svg",
            "icon-reminders.svg",
            "icon-planning.svg",
          ].map(
            (icon, iconIndex) =>
              itemIndex === iconIndex && (
                <a
                  key={icon}
                  href={`#${item}`}
                  onClick={() => {
                    setIsMenuPanelOpen(false);
                    setIsFeaturesOpen(false);
                    setIsCompanyOpen(false);
                  }}
                >
                  <img src={`images/${icon}`} alt={icon} />
                  {item}
                </a>
              )
          )}
        </li>
      )
    )}
  </ul>
);

export const CompanyList = ({
  setIsMenuPanelOpen,
  setIsCompanyOpen,
  setIsFeaturesOpen,
  isTabletOrMobile,
}) => (
  <ul
    className={`app__navbar-companylist-${
      isTabletOrMobile ? "mobile" : "desktop"
    }`}
  >
    {["history", "our team", "blog"].map((item) => (
      <li key={item}>
        <a
          href={`#${item}`}
          onClick={() => {
            setIsMenuPanelOpen(false);
            setIsCompanyOpen(false);
            setIsFeaturesOpen(false);
          }}
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
);

function Navbar({ isMenuPanelOpen, setIsMenuPanelOpen }) {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="images/logo.svg" alt="logo" />
      </div>
      <div className="app__navbar-desktop-menu">
        <ul className="app__navbar-desktop-links">
          {["features", "company", "careers", "about"].map((item) => (
            <li key={item}>
              {item === "features" ? (
                <div className="app__navbar-features">
                  <span onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}>
                    {item}
                    <img
                      src={
                        isFeaturesOpen
                          ? `images/icon-arrow-up.svg`
                          : `images/icon-arrow-down.svg`
                      }
                      alt=""
                    />
                  </span>
                  {isFeaturesOpen && (
                    <FeaturesList
                      setIsMenuPanelOpen={setIsMenuPanelOpen}
                      setIsFeaturesOpen={setIsFeaturesOpen}
                      setIsCompanyOpen={setIsCompanyOpen}
                      isTabletOrMobile={isTabletOrMobile}
                    />
                  )}
                </div>
              ) : item === "company" ? (
                <div className="app__navbar-company">
                  <span onClick={() => setIsCompanyOpen(!isCompanyOpen)}>
                    {item}
                    <img
                      src={
                        isCompanyOpen
                          ? `images/icon-arrow-up.svg`
                          : `images/icon-arrow-down.svg`
                      }
                      alt=""
                    />
                  </span>
                  {isCompanyOpen && (
                    <CompanyList
                      setIsMenuPanelOpen={setIsMenuPanelOpen}
                      setIsCompanyOpen={setIsCompanyOpen}
                      setIsFeaturesOpen={setIsFeaturesOpen}
                      isTabletOrMobile={isTabletOrMobile}
                    />
                  )}
                </div>
              ) : (
                <a href={`#${item}`}>{item}</a>
              )}
            </li>
          ))}
        </ul>
        <div className="app__navbar-desktop-cta">
          <button className="app__navbar-desktop-login">Login</button>
          <button className="app__navbar-desktop-register">Register</button>
        </div>
      </div>
      <div className="app__navbar-mobile-menu">
        <img
          src="images/icon-menu.svg"
          alt="menu"
          className="app__navbar-menu-icon"
          onClick={() => {
            setIsMenuPanelOpen(true);
          }}
        />
        {isMenuPanelOpen && (
          <div className="app__navbar-mobile-panel">
            <div>
              <img
                src="images/icon-close-menu.svg"
                alt="close"
                onClick={() => {
                  setIsMenuPanelOpen(false);
                  setIsFeaturesOpen(false);
                  setIsCompanyOpen(false);
                }}
              />
            </div>

            <ul>
              {["features", "company", "careers", "about"].map((item) => (
                <li key={item}>
                  {item === "features" ? (
                    <div className="app__navbar-features">
                      <span onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}>
                        {item}
                        <img
                          src={
                            isFeaturesOpen
                              ? `images/icon-arrow-up.svg`
                              : `images/icon-arrow-down.svg`
                          }
                          alt=""
                        />
                      </span>
                      {isFeaturesOpen && (
                        <FeaturesList
                          setIsMenuPanelOpen={setIsMenuPanelOpen}
                          setIsFeaturesOpen={setIsFeaturesOpen}
                          setIsCompanyOpen={setIsCompanyOpen}
                          isTabletOrMobile={isTabletOrMobile}
                        />
                      )}
                    </div>
                  ) : item === "company" ? (
                    <div className="app__navbar-company">
                      <span onClick={() => setIsCompanyOpen(!isCompanyOpen)}>
                        {item}
                        <img
                          src={
                            isCompanyOpen
                              ? `images/icon-arrow-up.svg`
                              : `images/icon-arrow-down.svg`
                          }
                          alt=""
                        />
                      </span>
                      {isCompanyOpen && (
                        <CompanyList
                          setIsMenuPanelOpen={setIsMenuPanelOpen}
                          setIsCompanyOpen={setIsCompanyOpen}
                          setIsFeaturesOpen={setIsFeaturesOpen}
                          isTabletOrMobile
                        />
                      )}
                    </div>
                  ) : (
                    <a
                      href={`#${item}`}
                      onClick={() => {
                        setIsMenuPanelOpen(false);
                        setIsFeaturesOpen(false);
                        setIsCompanyOpen(false);
                      }}
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="app__navbar-cta">
              <button className="app__navbar-login">Login</button>
              <button className="app__navbar-register">Register</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
