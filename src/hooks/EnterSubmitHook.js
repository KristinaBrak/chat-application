import {useEffect} from 'react';

const useEnterSubmit = callback => {
  useEffect(() => {
    const listener = ({code}) => {
      if (code === 'Enter' || code === 'NumpadEnter') {
        callback();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);
};

export default useEnterSubmit;
