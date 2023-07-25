import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Profile.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const user = useSelector(selectUser);
  const [logOut, setLogOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (logOut) {
      navigate('/');
    }
  }, [logOut]);
  return (
    <div className="profile">
      <Navbar />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img src="https://img.freepik.com/premium-vector/funny-green-face-square-avatar-cartoon-emotion-icon_53562-16129.jpg" />
          <div className="profile_details">
            <h2>{user.email}</h2>

            <div className="profile_plans">
              <h3>Plans</h3>
              <button
                className="profile_signOut"
                onClick={() => {
                  setLogOut(true);
                  auth.signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
