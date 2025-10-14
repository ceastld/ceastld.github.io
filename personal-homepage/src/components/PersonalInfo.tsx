import React from 'react';
import './PersonalInfo.css';

interface PersonalInfoProps {
  name: string;
  nameCn: string;
  role: string;
  affiliation: string;
  email: string;
  github: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  nameCn,
  role,
  affiliation,
  email,
  github,
}) => {
  return (
    <div className="personal-info">
      <div className="name">{name} ({nameCn})</div>
      <div className="role">{role}</div>
      <div className="affiliation">{affiliation}</div>
      <div className="contact">
        <div>Email: <a href={`mailto:${email}`}>{email}</a></div>
        <div>GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github.replace('https://', '')}</a></div>
      </div>
    </div>
  );
};

export default PersonalInfo;
