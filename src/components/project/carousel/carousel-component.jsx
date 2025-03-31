import React, { useState, useRef, useEffect } from 'react';
import Styles from './carousel-component.module.css';

export default function Carousel({ images }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, images.length);
  }, [images]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    carouselRef.current.scrollLeft = scrollLeft - walk;
    updateActiveIndex();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
    updateActiveIndex();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    snapToClosestSlide();
  };

  const updateActiveIndex = () => {
    if (!carouselRef.current) return;
    
    const scrollPosition = carouselRef.current.scrollLeft;
    const slideWidth = carouselRef.current.offsetWidth;
    const newIndex = Math.round(scrollPosition / slideWidth);
    
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < images.length) {
      setActiveIndex(newIndex);
    }
  };

  const snapToClosestSlide = () => {
    if (!carouselRef.current) return;
    
    const slideWidth = carouselRef.current.offsetWidth;
    const targetScrollPosition = activeIndex * slideWidth;
    
    carouselRef.current.scrollTo({
      left: targetScrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className={Styles.carouselContainer}>
      <div 
        className={`${Styles.carouselWrapper} ${isDragging ? Styles.dragging : ''}`}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            ref={el => slideRefs.current[index] = el}
            className={`${Styles.carouselSlide} ${activeIndex === index ? Styles.active : ''}`}
          >
            <img 
              src={image} 
              alt={image.alt || `Slide ${index + 1}`} 
              className={Styles.carouselImage}
            />
          </div>
        ))}
      </div>
      
      <div className={Styles.carouselIndicators}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${Styles.carouselIndicator} ${activeIndex === index ? Styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
