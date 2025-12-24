import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { gamesJourney } from "../../portfolio.js";
import "./Games.css";

function Games(props) {
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
        <div className="games-main">
            <Header theme={theme} setTheme={props.setTheme} />
            <div className="basic-games">
                <Fade bottom duration={2000} distance="40px">
                    <div className="games-heading-div">
                        <div className="games-heading-text-div">
                            <h1
                                className="games-heading-text"
                                style={{ color: theme.text }}
                            >
                                {gamesJourney.title}
                            </h1>
                            <p
                                className="games-header-detail-text subTitle"
                                style={{ color: theme.secondaryText }}
                            >
                                {gamesJourney.description}
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Games Grid */}
            <section className="games-section">
                <div className="games-container">
                    {gamesJourney.games.map((game) => (
                        <Fade bottom duration={1000} distance="20px" key={game.id}>
                            <div className="game-card" style={{ backgroundColor: theme.imageDark }}>
                                <div className="game-cover-container">
                                    <img
                                        src={game.image || "/placeholder.svg"}
                                        alt={`${game.title} cover`}
                                        className="game-cover"
                                    />
                                    <div className="game-overlay"></div>
                                </div>
                                <div className="game-info">
                                    <h4 className="game-title" style={{ color: theme.text }}>
                                        {game.title}
                                    </h4>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>

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

export default Games;
