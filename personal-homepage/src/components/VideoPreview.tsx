import React, { useState } from 'react';
import './VideoPreview.css';

interface VideoPreviewProps {
  src: string;
  className?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ src, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <video 
        src={src} 
        autoPlay 
        loop 
        muted 
        playsInline
        className={`preview-video ${className}`}
        onClick={handleOpen}
      />

      {isOpen && (
        <div className="preview-overlay" onClick={handleClose}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <video 
              src={src} 
              controls
              autoPlay
              loop
              muted
              playsInline
              className="preview-video-large"
            />
            <button className="preview-close" onClick={handleClose}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPreview;
