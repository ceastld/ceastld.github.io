import React, { useState } from 'react';
import './ImagePreview.css';

interface ImagePreviewProps {
  src: string;
  alt: string;
  className?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, alt, className = '' }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        className={`preview-image ${className}`}
        onClick={openPreview}
      />
      
      {isPreviewOpen && (
        <div className="preview-overlay" onClick={closePreview}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="preview-close" onClick={closePreview}>
              ×
            </button>
            <img src={src} alt={alt} className="preview-image-large" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePreview;
