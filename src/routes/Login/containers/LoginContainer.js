import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../modules/actions';
import LoginMarkup from '../components/LoginMarkup';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      email: '',
      password: '',
      error: ''
    };

    this._responseGoogle = this._responseGoogle.bind(this);
    this._responseFacebook = this._responseFacebook.bind(this);
    this._handleEmailInputChange = this._handleEmailInputChange.bind(this);
    this._handlePasswordInputChange = this._handlePasswordInputChange.bind(this);
    this._onInputFocus = this._onInputFocus.bind(this);
    this._onSubmit = this._onSubmit.bind(this);

  }

  componentDidMount() {}

  render() {
    return (<LoginMarkup loginState={this.state} responseGoogle={this._responseGoogle} responseFacebook={this._responseFacebook} handleEmailInputChange={this._handleEmailInputChange} handlePasswordInputChange={this._handlePasswordInputChange}  onInputFocus={this._onInputFocus}   onSubmit={this._onSubmit}   />);
  }

  _handleEmailInputChange = (e) => {
    this.setState({email: e.target.value});
  }

  _handlePasswordInputChange = (e) => {
    this.setState({password: e.target.value});
  }

  _onInputFocus = () => {
      this.setState({error: ""});
  }

  _onSubmit = () => {
    if(this.state.password === '' || this.state.email === ''){
        this.setState({error: "username OR password cannot be empty"});
        return ;
    }
    this.props.actions.userLogin(this.state.email, this.state.password).then(this._handleNavigation);
  }

  _handleNavigation = () => {
    if (this.props.login.status === "Success") {
      browserHistory.push("/dashboard");
    } else {
      this.setState({error: this.props.login.message});
    }
  }

  _responseFacebook = (e) => {
  }

  _responseGoogle = (e) => {
  }

}

LoginContainer.propTypes = {
  actions: PropTypes.shape({}),
  login: PropTypes.object
};

const mapStateToProps = (state) => ({login: state.login}),
  mapDispatchToProps = (dispatch) => {
    const {userLogin} = actions;

    return {
      actions: bindActionCreators({
        userLogin
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
