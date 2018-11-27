import React from 'react';
import UserForm from '../UserForm/containerUserForm';

const Profile = ({ logged }) => {
  return (
    <div>
      {logged ? <UserForm /> : <p>Log in to see edit form</p>}
    </div>
  )
};

export default Profile;