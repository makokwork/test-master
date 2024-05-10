import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');

  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuth(localStorage.getItem('isAuth') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('isAuth');
    navigate('/');
  }

  return { isAuth, logout }
}