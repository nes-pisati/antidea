import React, { useState, useRef, useEffect } from 'react';
import Styles from './carousel-component.module.css';

export default function Carousel({ images }) {

  return (
    <div className={Styles.carouselContainer}>
      <div className={Styles.carouselWrapper}>
        {images.map((image, index) => (
          <div 
            key={index}
            className={Styles.carouselSlide}
            // ref={el => slideRefs.current[index] = el}
            // className={`${Styles.carouselSlide} ${activeIndex === index ? Styles.active : ''}`}
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
            className={Styles.carouselIndicator}
            // className={`${Styles.carouselIndicator} ${activeIndex === index ? Styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
