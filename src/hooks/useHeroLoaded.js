import { useState, useCallback } from 'react';

const useHeroLoaded = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  const handleHeroLoad = useCallback(() => {
    setIsHeroLoaded(true);
  }, []);

  return [isHeroLoaded, handleHeroLoad];
};

export default useHeroLoaded;
