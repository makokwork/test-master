import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return { isAuth, setIsAuth, logout }
}