import React from 'react';
import './LinkButton.css';

interface LinkButtonProps {
  text: string;
  url: string;
  icon?: string | React.ReactNode;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  url,
  icon,
  className = '',
}) => {
  const isExternal = url.startsWith('http') && !url.includes(window.location.hostname);

  const renderIcon = () => {
    if (!icon) return null;
    
    if (typeof icon === 'string') {
      // 简单字符串，当作emoji处理
      return <span className="link-button-icon">{icon}</span>;
    }
    
    // React元素，直接渲染
    return <span className="link-button-icon">{icon}</span>;
  };

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`link-button ${className}`}
    >
      {renderIcon()}
      {text}
    </a>
  );
};

export default LinkButton;
