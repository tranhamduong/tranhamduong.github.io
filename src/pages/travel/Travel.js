import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MapRenderer from "../../components/travel/MapRenderer";
import { Fade } from "react-reveal";
import { travelJourney } from "../../portfolio.js";
import "./Travel.css";

function Travel(props) {
    const theme = props.theme;
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="travel-main">
            <Header theme={theme} setTheme={props.setTheme} />
            <div className="basic-travel">
                <Fade bottom duration={2000} distance="40px">
                    <div className="travel-heading-div">
                        <div className="travel-heading-text-div">
                            <h1
                                className="travel-heading-text"
                                style={{ color: theme.text }}
                            >
                                {travelJourney.title}
                            </h1>
                            <p
                                className="travel-header-detail-text subTitle"
                                style={{ color: theme.secondaryText }}
                            >
                                {travelJourney.description}
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Travel Maps Section */}
            <div className="travel-maps-container">
                <div className="map-section">
                    <Fade bottom duration={1000} distance="20px">
                        <h2 className="map-title" style={{ color: theme.text }}>World Map</h2>
                    </Fade>
                    <MapRenderer
                        type="world"
                        visitedData={travelJourney.worldMap.visited}
                        theme={theme}
                    />
                </div>

                <div className="map-separator"></div>

                <div className="map-section vietnam-map-section">
                    <Fade bottom duration={1000} distance="20px">
                        <h2 className="map-title" style={{ color: theme.text }}>Vietnam Map</h2>
                        <p style={{ color: theme.secondaryText, marginBottom: "20px" }}>
                            Detailed map of provinces visited in Vietnam.
                        </p>
                    </Fade>
                    <MapRenderer
                        type="vietnam"
                        visitedData={travelJourney.vietnamMap.visited}
                        theme={theme}
                    />
                </div>
            </div>

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    style={{
                        backgroundColor: theme.accentColor,
                        color: theme.text
                    }}
                    aria-label="Back to top"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                </button>
            )}

            <br />
            <br />
            <Footer theme={props.theme} onToggle={props.onToggle} />
        </div>
    );
}

export default Travel;
