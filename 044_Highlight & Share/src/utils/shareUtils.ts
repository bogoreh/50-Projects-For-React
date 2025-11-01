export const shareText = async (text: string): Promise<void> => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Shared Text',
        text: text,
      });
    } catch (error) {
      console.log('Sharing cancelled', error);
    }
  } else if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      alert('Text copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy text:', error);
      fallbackCopyText(text);
    }
  } else {
    fallbackCopyText(text);
  }
};

const fallbackCopyText = (text: string): void => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    alert('Text copied to clipboard!');
  } catch (error) {
    console.error('Fallback copy failed:', error);
    alert('Failed to copy text. Please copy manually.');
  }
  
  document.body.removeChild(textArea);
};