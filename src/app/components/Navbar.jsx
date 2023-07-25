import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Navbar.css';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);
  return (
    <div className={`navbar ${show && 'navbar_black'}`}>
      <div className="navbar_contents">
        <img
          onClick={() => navigate('/')}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="navbar_logo"
        />
        <img
          onClick={() => navigate('/profile')}
          src="https://img.freepik.com/premium-vector/funny-green-face-square-avatar-cartoon-emotion-icon_53562-16129.jpg"
          alt=""
          className="navbar_avatar"
        />
      </div>
    </div>
  );
}
