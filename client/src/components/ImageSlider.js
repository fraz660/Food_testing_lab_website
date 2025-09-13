import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';

const ImageSlider = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, isHovered, images.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden group bg-gradient-to-br from-purple-900 to-purple-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fallback Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700"></div>
      
      {/* Image Container with Absolute Positioning */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Lab Image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onLoad={() => {
              console.log(`Successfully loaded image: ${image}`);
            }}
            onError={(e) => {
              console.error(`Failed to load image: ${image}`);
              e.target.style.display = 'none';
            }}
          />
          {/* Enhanced Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Previous image"
      >
        <FaChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Next image"
      >
        <FaChevronRight className="h-5 w-5" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <FaPause className="h-4 w-4" /> : <FaPlay className="h-4 w-4" />}
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              index === currentIndex
                ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-100 ease-linear"
          style={{ 
            width: isPlaying && !isHovered ? '100%' : '0%',
            animation: isPlaying && !isHovered ? `progress ${interval}ms linear` : 'none'
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 left-4 bg-black/30 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlider;
