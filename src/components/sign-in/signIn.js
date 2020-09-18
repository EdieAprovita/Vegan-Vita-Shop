import React from 'react';

import FormInput from '../form-input/form-input';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Ya tengo una cuenta</h2>
        <span>Registrate con tu correo y una constraseña</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
