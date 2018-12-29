import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
  HeaderContent,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style.js';


class Header extends Component {

  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          );
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch 
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
    return (
      <HeaderContent>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <Link to="/">
              <NavItem className="left active"><i className="iconfont">&#xe60f;</i>首页</NavItem>
            </Link>
            <NavItem className="left margin-rig">下载App</NavItem>
            { 
              login ? 
                <NavItem onClick={logout}  className="rig">退出</NavItem> : 
                <Link to="/login"><NavItem className="rig">登录</NavItem></Link>
            }
            <NavItem className="rig">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused} 
                timeout={200}
                classNames="slide"
              >
                <NavSearch 
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe64d;</i>
              { this.getListArea() }
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="writting"><i className="iconfont">&#xe604;</i>写文章</Button>
            </Link>
            {
              login ? null : <Link to="/register">
                <Button className="reg">注册</Button>
              </Link> 
            } 
          </Addition>
        </HeaderWrapper>
      </HeaderContent>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      console.log(list);
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      console.log(spin);
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      originAngle = originAngle ? parseInt(originAngle, 10) : 0;
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);