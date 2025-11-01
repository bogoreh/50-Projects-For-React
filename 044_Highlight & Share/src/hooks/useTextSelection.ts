import { useState, useEffect } from 'react';

interface TextSelection {
  text: string;
  rect: DOMRect | null;
}

export const useTextSelection = () => {
  const [selection, setSelection] = useState<TextSelection>({
    text: '',
    rect: null,
  });

  useEffect(() => {
    const handleSelectionChange = () => {
      const selectedText = window.getSelection()?.toString().trim() || '';
      
      if (selectedText) {
        const range = window.getSelection()?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        
        setSelection({
          text: selectedText,
          rect: rect || null,
        });
      } else {
        setSelection({ text: '', rect: null });
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  return selection;
};