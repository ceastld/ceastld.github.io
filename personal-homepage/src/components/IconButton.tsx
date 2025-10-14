import React from 'react';
import './IconButton.css';

interface IconButtonProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  href,
  icon,
  children,
  className = '',
}) => {
  const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);
  
  return (
    <a 
      href={href} 
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`icon-button ${className}`}
    >
      {icon}
      {children}
    </a>
  );
};

export default IconButton;
