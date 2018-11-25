import React from 'react';
import Orders from '../Orders/containerOrders';
import UserForm from '../UserForm/containerUserForm';

const Profile = ({ logged }) => {
  return (
    <div>
      {logged ?
        <div>
          <Orders />
          <UserForm />
        </div> :
        <p>Log in to see orders</p>}
    </div>
  )
};

export default Profile;