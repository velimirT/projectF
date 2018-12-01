import React from 'react';
import UserForm from '../UserForm/containerUserForm';

const Profile = ({ logged }) => {
  return (
    <main>
      {logged ? <UserForm /> : <p>Log in to see edit form</p>}
    </main>
  )
};

export default Profile;