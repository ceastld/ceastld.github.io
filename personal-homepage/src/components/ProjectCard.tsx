import React from 'react';
import ImagePreview from './ImagePreview';
import VideoPreview from './VideoPreview';
import './ProjectCard.css';

interface LinkItem {
  text: string;
  url: string;
  icon?: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  links?: LinkItem[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  links,
  className = '',
}) => {
  const isVideo = image.endsWith('.mp4') || image.endsWith('.webm') || image.endsWith('.mov');
  
  return (
    <div className={`project-card ${className}`}>
      <div className="project-image">
        {isVideo ? (
          <VideoPreview src={image} className="project-video" />
        ) : (
          <ImagePreview src={image} alt={title} />
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {links && links.length > 0 && (
          <div className="project-links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {link.icon && (
                  <span className="project-link-icon">{link.icon}</span>
                )}
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
