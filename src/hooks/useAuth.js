import { useEffect, useState } from 'react'

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuth(localStorage.getItem('isAuth') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    }
  }, [])

  return { isAuth }
}