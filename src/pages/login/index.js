import React, { PureComponent } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  LoginWrapper,
  Logo,
  LoginBox,
  Input,
  Button,
  Toptitle,
  TabText,
  ErrorTip
} from './style';

class Login extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      accountTip: '',
      password: '',
      passwordTip: '',
      btnstatus: false,
    };
  }

  changeBtnStatus(account, password) {
    console.log(account, password);
    if (!!account && !!password) {
      this.setState({
        btnstatus: true
      });
    }else{
      this.setState({
        btnstatus: false
      });
    }
  }

  handleChangAccount = (e) => {
    let account = e.target.value; 
    let accountTip = '';
    
    if (account.length < 3) {
      accountTip = '账号长度不能小于3位字符';
    } else {
      accountTip = '';
    } 
    this.setState({
      account,
      accountTip
    });
  }

  handleChangPassword = (e) => {
    let password = e.target.value;
    let passwordTip = '';
    if (password.length < 6) {
      passwordTip = '密码长度不能小于6位字符';
    }else{
      passwordTip = '';
    } 
    this.setState({
      password,
      passwordTip
    });
  }
  render() {
    const { loginState } = this.props;
    if (!loginState) {
      return (
        <LoginWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <LoginBox>
            <Toptitle>
              <Link to="/login"><TabText className="active">登录</TabText></Link>
              <Link to="/register"><TabText>注册</TabText></Link>
            </Toptitle>
            {/* <Input placeholder='账号'
              type='text' ref={(input) => {this.account = input}} 
              onChang={this.handleChangAccount}
            /> */}
            <Input placeholder='账号' id="account"
              type='text' value={this.state.account}
              onChange={this.handleChangAccount}
            />
            <ErrorTip>{this.state.accountTip}</ErrorTip>
            <Input placeholder='密码' id="password"
              type='password' value={this.state.password}
              onChange={this.handleChangPassword}
            />
            <ErrorTip>{this.state.passwordTip}</ErrorTip>
            <Button onClick={() => this.props.login(this.account, this.password )}  
            >登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />
    }

  }

}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(account, password) {
    console.log(account, password);
    dispatch(actionCreators.login(account, password))
  }
});

export default connect(mapState, mapDispatch)(Login);