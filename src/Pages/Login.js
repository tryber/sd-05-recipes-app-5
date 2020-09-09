import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="email-input" type="text" placeholder="Email" />
        <input data-testid="password-input" type="password" placeholder="Senha" />
        <button data-testid="login-submit-btn">Entrar</button>
      </div>
    );
  }
}

export default Login;
