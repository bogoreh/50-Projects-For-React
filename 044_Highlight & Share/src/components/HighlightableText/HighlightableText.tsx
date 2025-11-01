import { useState } from 'react';
import { useTextSelection } from '../../hooks/useTextSelection';
import { ShareButton } from '../ShareButton';

interface HighlightableTextProps {
  content?: string;
}

export const HighlightableText = ({ 
  content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.` 
}: HighlightableTextProps) => {
  const { text, rect } = useTextSelection();
  const [isShared, setIsShared] = useState(false);

  const handleShare = () => {
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
  };

  const getButtonPosition = () => {
    if (!rect) return null;
    
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX + (rect.width / 2),
    };
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Highlight & Share Demo</h1>
      <p>Select any text in the content below to see the share button.</p>
      
      {isShared && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '4px',
          zIndex: 1001,
        }}>
          Text shared successfully!
        </div>
      )}

      <div
        style={{
          lineHeight: '1.6',
          fontSize: '16px',
          userSelect: 'text',
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #e9ecef',
        }}
      >
        {content.split('\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '16px' }}>
            {paragraph}
          </p>
        ))}
      </div>

      <ShareButton
        text={text}
        position={getButtonPosition()}
        onShare={handleShare}
      />
    </div>
  );
};