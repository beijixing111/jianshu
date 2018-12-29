import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { actionCreators } from './store';
import { LoginWrapper, Logo, LoginBox, Input, Button, 
  Toptitle, TabText, Layerbg, LayerWrapper, LayerTitle, LayerContent
} from './style';

import axios from 'axios';
import Modal from '../../components/Modal';


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isshow: false,
      timeNum: 3
    };
  }

  handleClickSubmit = () => {
    console.log(this);
    let account = this.account.value;
    let password = this.surepassword.value; 
    axios.get("http://localhost:3200/login.json?account=" + account + "&password=" + password)
    .then((res) => {
      const result = res.data.data;
      if (result) {
        this.jumpToLogin();
        this.setState({
          isshow: !this.state.isshow
        });
      }
    }).catch((err) => {
      console.log(err);
    })
  }
  jumpToLogin() {
    this.timeId = window.setInterval(() => {
      console.log(this.state.timeNum);
      if(this.state.timeNum <= 0 ){
        clearInterval(this.timeId);
        this.props.history.push('/login');
        return ;
      }
      this.setState({
        timeNum: this.state.timeNum - 1
      })
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timeId);
  }
  render() {
    // const { registerState } = this.props; 
    console.log(this.props);
    return (
      <div>
        <LoginWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <LoginBox>
            <Toptitle>
              <Link to="/login"><TabText>登录</TabText></Link>
              <Link to="/register"><TabText  className="active">注册</TabText></Link>
            </Toptitle>
            <Input placeholder='账号' type='text' ref={(input) => {this.account = input}} />
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}} />
            <Input placeholder='确认密码' type='password' ref={(input) => {this.surepassword = input}} />
            {/* <Button onClick = {
              () => this.props.register(this.account, this.surepassword)
            } >注册</Button> */}
            <Button onClick = { this.handleClickSubmit }>注册</Button>
          </LoginBox>
        </LoginWrapper>
        { this.state.isshow ? <Modal>
          {/* <Layerbg></Layerbg> */}
          <LayerWrapper>
            <LayerTitle>提示</LayerTitle>
            <LayerContent>
              {/* 注册成功，<Link to="/login">去登录</Link> */}
              注册成功，{this.state.timeNum}秒后跳转至登录！
            </LayerContent>
          </LayerWrapper>
        </Modal> : null }
      </div>
    );

  }
}

export default Register;

// const mapState = (state) => ({
//   registerState: state.getIn(['register', 'register'])
// });

// const mapDispatch = (dispatch) => ({
//   register(accountEl, passwordEl) {
//     console.log(accountEl, passwordEl);
//     dispatch(actionCreators.register(accountEl.value, passwordEl.value))
//   }
// })

// export default connect(mapState, mapDispatch)(Register);