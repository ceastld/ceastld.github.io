import React from 'react';
import './BackButton.css';

interface BackButtonProps {
  href?: string;
  text?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  href = "/", 
  text = "返回主页" 
}) => {
  return (
    <div className="back-button-container">
      <a href={href} className="back-button">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="back-arrow"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        {text}
      </a>
    </div>
  );
};

export default BackButton;
