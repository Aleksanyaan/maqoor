import React, { useState } from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: 'white',
        zIndex: 1,
        cursor: 'pointer'
    };

    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }

    const DotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fonSize: '20px'
    }

    const goToPreviouse = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPreviouse}>
            ‹
            </div>
            <div style={rightArrowStyles} onClick={goToNext}>
            ›
            </div>
            <div style={slideStyles}>
            </div>
            <div style={dotContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={DotStyles} onClick={() => goToSlide(slideIndex)}>⬤</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider;


