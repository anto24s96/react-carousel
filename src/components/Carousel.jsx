import React from "react";
import { useState } from "react";

const Carousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="carosello-container">
            <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="carosello-image"
            />
            <div className="carosello-buttons">
                <button className="carosello-button prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="carosello-button next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
            <div className="carosello-bullets">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`bullet ${
                            index === currentSlide ? "active" : ""
                        }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
