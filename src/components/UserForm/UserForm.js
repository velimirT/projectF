import React from 'react';

class UserForm extends React.Component {

  state = {

  }

  render(){
    return(
      <div>
        <form>
          <legend>User form</legend>
          <p>
            <label htmlFor="username">Nick name</label>
            <input id="username" />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input id="password" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input id="email" />
          </p>
          <p>
            <label htmlFor="address">Address</label>
            <input id="assress" />
          </p>
          <p>
            <label htmlFor="first-name">First name</label>
            <input id="first-name" />
          </p>
          <p>
            <label htmlFor="last-name">Last name</label>
            <input id="last-name" />
          </p>
        </form>
      </div>
    )
  }
};

export default UserForm;