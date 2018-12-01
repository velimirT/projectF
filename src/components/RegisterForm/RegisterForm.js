import React from 'react';
import './registerForm.css';

class RegisterForm extends React.Component {

  state = {
    username: '',
    password: '',
    email: '',
    address: '',
    firstName: '',
    lastName: '',
    message: 'User Successfully refistered!'
  }

  // componentDidMount() {
  //   console.log('register mounted');
  // };

  handleOnchange = (e) => {
    const entry = e.target.value;
    const name = e.target.id;
    this.setState(() => ({ [name]: entry }));
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, address, firstName, lastName } = this.state;
    const { addNewUser } = this.props;

    const userInfo = {
      username: username.trim(),
      email: email.trim(),
      password: password.trim(),
      address: address.trim(),
      first_name: firstName.trim(),
      last_name: lastName.trim()
    };

    addNewUser(userInfo);
  }

  render() {

    const { username, password, email, address, firstName, lastName, message } = this.state;
    const { logged } = this.props;

    return (
      <main>
        {
          !logged ?
            <form onSubmit={this.handleOnSubmit} className="register-form">
              <legend>Edit form</legend>
              <div>
                <p>
                  <label htmlFor="username">Nick name</label>
                </p>
                <input
                  id="username"
                  onChange={this.handleOnchange}
                  value={username}
                  placeholder="art_maniac"
                />
              </div>
              <div>
                <p>
                  <label htmlFor="password">Password</label>
                </p>
                <input
                  id="password"
                  onChange={this.handleOnchange}
                  value={password}
                  placeholder="greenTable20"
                  type="password"
                />
              </div>
              <div>
                <p>
                  <label htmlFor="email">Email</label>
                </p>
                <input
                  id="email"
                  onChange={this.handleOnchange}
                  value={email}
                  placeholder="cool_user@gmail.com"
                />
              </div>
              <div>
                <p>
                  <label htmlFor="address">Address</label>
                </p>
                <input
                  id="address"
                  onChange={this.handleOnchange}
                  value={address}
                  placeholder="3860 Ruby St"
                />
              </div>
              <div>
                <p>
                  <label htmlFor="first-name">First name</label>
                </p>
                <input
                  id="firstName"
                  onChange={this.handleOnchange}
                  value={firstName}
                  placeholder="Nick"
                />
              </div>
              <div>
                <p>
                  <label htmlFor="last-name">Last name</label>
                </p>
                <input
                  id="lastName"
                  onChange={this.handleOnchange}
                  value={lastName}
                  placeholder="Norton"
                />
              </div>
              <button>Submit</button>
            </form> :
            <p>{message}</p>
        }

      </main>
    )
  }
};

export default RegisterForm;