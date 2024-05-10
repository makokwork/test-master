import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('isAuth');
    navigate('/login');
  }

  return { isAuth, setIsAuth, logout }
}