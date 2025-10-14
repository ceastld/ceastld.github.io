import React from 'react';
import './ExperienceItem.css';

interface ExperienceItemProps {
  image: string;
  institution: string;
  period: string;
  position: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  image,
  institution,
  period,
  position,
}) => {
  return (
    <div className="experience-item">
      <div className="experience-image">
        <img src={image} alt={institution} />
      </div>
      <div className="experience-content">
        <div className="experience-institution">{institution}</div>
        <div className="experience-period">{period}</div>
        <div className="experience-position">{position}</div>
      </div>
    </div>
  );
};

export default ExperienceItem;
