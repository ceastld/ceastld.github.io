import React from 'react';
import ImagePreview from './ImagePreview';
import './AcademicPaper.css';

interface AcademicPaperProps {
  image: string;
  title: string;
  authors: string;
  institution: string;
  paper?: string | null;
  page?: string | null;
  code?: string | null;
}

const AcademicPaper: React.FC<AcademicPaperProps> = ({
  image,
  title,
  authors,
  institution,
  paper = null,
  page = null,
  code = null,
}) => {
  return (
    <div className="academic-paper">
        <div className="paper-image">
          <ImagePreview src={image} alt={title} />
        </div>
      <div className="paper-content">
        <h3 className="paper-title">{title}</h3>
        <p className="paper-authors" dangerouslySetInnerHTML={{ __html: authors.replace(/Dongyu Liu/g, '<strong>Dongyu Liu</strong>') }}></p>
        <p className="paper-institution">{institution}</p>
        <div className="paper-links">
          {paper && (
            <a href={paper} target="_blank" rel="noopener noreferrer" className="paper-link">
              Paper
            </a>
          )}
          {page && (
            <a href={page} target="_blank" rel="noopener noreferrer" className="paper-link">
              Webpage
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer" className="paper-link">
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicPaper;
