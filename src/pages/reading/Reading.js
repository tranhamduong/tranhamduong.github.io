import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import { readingJourney } from "../../portfolio.js";
import "./Reading.css";

function Reading(props) {
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
        <div className="reading-main">
            <Header theme={theme} setTheme={props.setTheme} />
            <div className="basic-reading">
                <Fade bottom duration={2000} distance="40px">
                    <div className="reading-heading-div">

                        <div className="reading-heading-text-div">
                            <h1
                                className="reading-heading-text"
                                style={{ color: theme.text }}
                            >
                                {readingJourney.title}
                            </h1>
                            <p
                                className="reading-header-detail-text subTitle"
                                style={{ color: theme.secondaryText }}
                            >
                                {readingJourney.description}
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Books Grid */}
            <section className="books-section">
                <div className="books-container">
                    {readingJourney.books.map((book) => (
                        <Fade bottom duration={1000} distance="20px" key={book.id}>
                            <div className="book-card" style={{ backgroundColor: theme.imageDark }}>
                                <div className="book-cover-container">
                                    <img
                                        src={book.cover || "/placeholder.svg"}
                                        alt={`${book.title} cover`}
                                        className="book-cover"
                                    />
                                    <div className="book-overlay"></div>
                                    {book.year && (
                                        <div className="book-year-badge" style={{
                                            backgroundColor: theme.accentColor,
                                            color: theme.text
                                        }}>
                                            {book.year}
                                        </div>
                                    )}
                                </div>
                                <div className="book-info">
                                    <h4 className="book-title" style={{ color: theme.text }}>
                                        {book.title}
                                    </h4>
                                    <p className="book-author" style={{ color: theme.secondaryText }}>
                                        {book.author}
                                    </p>
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

export default Reading;
