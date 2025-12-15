'use client';

import React from 'react';
import styles from './LoadingPage.module.css';

const LoadingPage: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        {/* Animation Element */}
        <div className={styles.animationElement}>
          <div className={styles.animationLines}>
            <div className={styles.line} style={{ width: '20px' }}></div>
            <div className={styles.line} style={{ width: '30px' }}></div>
            <div className={styles.line} style={{ width: '20px' }}></div>
          </div>
          <div className={styles.animationCircles}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </div>
        
        {/* LOADING Text */}
        <h1 className={styles.loadingText}>LOADING</h1>
        
        {/* Bus Illustration */}
        <div className={styles.busContainer}>
          <svg
            className={styles.bus}
            viewBox="0 0 300 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bus Body */}
            <rect
              x="20"
              y="40"
              width="260"
              height="60"
              fill="#40B0E0"
              stroke="#5C3366"
              strokeWidth="2"
              rx="5"
            />
            
            {/* White Stripe */}
            <path
              d="M 20 70 Q 140 50 280 55"
              fill="white"
              stroke="#5C3366"
              strokeWidth="2"
            />
            
            {/* Windows */}
            {/* Passenger Windows */}
            <rect x="35" y="45" width="28" height="20" fill="#E0F4FF" stroke="#5C3366" strokeWidth="1.5" />
            <line x1="35" y1="50" x2="63" y2="65" stroke="white" strokeWidth="1" />
            <line x1="63" y1="50" x2="35" y2="65" stroke="white" strokeWidth="1" />
            
            <rect x="70" y="45" width="28" height="20" fill="#E0F4FF" stroke="#5C3366" strokeWidth="1.5" />
            <line x1="70" y1="50" x2="98" y2="65" stroke="white" strokeWidth="1" />
            <line x1="98" y1="50" x2="70" y2="65" stroke="white" strokeWidth="1" />
            
            <rect x="105" y="45" width="28" height="20" fill="#E0F4FF" stroke="#5C3366" strokeWidth="1.5" />
            <line x1="105" y1="50" x2="133" y2="65" stroke="white" strokeWidth="1" />
            <line x1="133" y1="50" x2="105" y2="65" stroke="white" strokeWidth="1" />
            
            <rect x="140" y="45" width="28" height="20" fill="#E0F4FF" stroke="#5C3366" strokeWidth="1.5" />
            <line x1="140" y1="50" x2="168" y2="65" stroke="white" strokeWidth="1" />
            <line x1="168" y1="50" x2="140" y2="65" stroke="white" strokeWidth="1" />
            
            <rect x="175" y="45" width="28" height="20" fill="#E0F4FF" stroke="#5C3366" strokeWidth="1.5" />
            <line x1="175" y1="50" x2="203" y2="65" stroke="white" strokeWidth="1" />
            <line x1="203" y1="50" x2="175" y2="65" stroke="white" strokeWidth="1" />
            
            <rect x="210" y="45" width="28" height="20" fill="#E0F4FF" stroke="#5C3366" strokeWidth="1.5" />
            <line x1="210" y1="50" x2="238" y2="65" stroke="white" strokeWidth="1" />
            <line x1="238" y1="50" x2="210" y2="65" stroke="white" strokeWidth="1" />
            
            {/* Driver Window */}
            <polygon
              points="245,45 275,42 275,62 245,65"
              fill="#E0F4FF"
              stroke="#5C3366"
              strokeWidth="1.5"
            />
            <line x1="245" y1="50" x2="275" y2="47" stroke="white" strokeWidth="1" />
            <line x1="275" y1="47" x2="245" y2="62" stroke="white" strokeWidth="1" />
            
            {/* Wheels */}
            <circle cx="60" cy="100" r="12" fill="#4A4A4A" stroke="#5C3366" strokeWidth="2" />
            <circle cx="60" cy="100" r="6" fill="white" />
            
            <circle cx="150" cy="100" r="12" fill="#4A4A4A" stroke="#5C3366" strokeWidth="2" />
            <circle cx="150" cy="100" r="6" fill="white" />
            
            <circle cx="240" cy="100" r="12" fill="#4A4A4A" stroke="#5C3366" strokeWidth="2" />
            <circle cx="240" cy="100" r="6" fill="white" />
            
            {/* Road/Ground */}
            <line x1="0" y1="112" x2="300" y2="112" stroke="#5C3366" strokeWidth="3" />
            
            {/* Taillight */}
            <rect x="18" y="55" width="8" height="12" fill="red" stroke="white" strokeWidth="1" />
            
            {/* Door Handle */}
            <rect x="50" y="75" width="6" height="2" fill="#5C3366" rx="1" />
            
            {/* Roof Details */}
            <ellipse cx="100" cy="42" rx="8" ry="4" fill="#40B0E0" stroke="#5C3366" strokeWidth="1" />
            <ellipse cx="200" cy="42" rx="8" ry="4" fill="#40B0E0" stroke="#5C3366" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
