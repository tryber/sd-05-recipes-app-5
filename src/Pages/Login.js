import React from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import './Login.css';
import sound from '../Sonoplastia/mastermusic.mp3';

const regEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pwLength: 0,
      email: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { email } = this.state;
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  }
  render() {
    const { pwLength, email } = this.state;
    return (
      <div className="login">
        <ReactAudioPlayer loop src={sound} volume={0.8} />
        <h1 className="MonsterChef">Monster Chef</h1>
        <input
          className="form-group"
          data-testid="email-input"
          type="text"
          onChange={(event) => this.setState({ email: event.target.value })}
          placeholder="Email"
        />
        <input
          className="form-group"
          data-testid="password-input"
          type="password"
          onChange={(event) => this.setState({ pwLength: event.target.value.length })}
          placeholder="Senha"
        />
        <Link to="/comidas">
          <button
            className="btn btn-primary btn-lg"
            data-testid="login-submit-btn"
            onClick={this.handleClick}
            disabled={!(email.match(regEmail) && pwLength > 6)}
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
