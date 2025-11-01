import { shareText } from '../../utils/shareUtils';

interface ShareButtonProps {
  text: string;
  position: { top: number; left: number } | null;
  onShare: () => void;
}

export const ShareButton: ShareButtonProps = ({ 
  text, 
  position, 
  onShare 
}) => {
  if (!position || !text) return null;

  const handleShare = async () => {
    await shareText(text);
    onShare();
  };

  return (
    <button
      onClick={handleShare}
      style={{
        position: 'fixed',
        top: position.top - 50,
        left: position.left,
        zIndex: 1000,
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}
      className="share-button"
    >
      Share Highlight
    </button>
  );
};