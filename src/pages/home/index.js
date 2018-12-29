import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
  PrevButton,
  NextButton
} from './style';

const imagesArr = [
  {
    original: require('../../statics/images/banner01.jpg'),
    bulletClass: 'shadow-none'
  },
  {
    original: require('../../statics/images/banner02.jpg'),
    bulletClass: 'shadow-none'
  }
];

class Home extends Component {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
  componentWillUnMount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  render() {
    return ( 
      <HomeWrapper>
      	<HomeLeft >
					<div className="">
            <ImageGallery 
              items={imagesArr} 
              showThumbnails = {false}
              showFullscreenButton = {false}
              showPlayButton = {false}
              showBullets={true}
              autoPlay={true}
              renderLeftNav={
                (onClick, disabled) => ( 
                  <PrevButton disabled={disabled}
                    onClick={onClick}>
                    <i className='iconfont'>&#xe61d;</i>
                  </PrevButton>  
                )
              }
              renderRightNav={
                (onClick, disabled) => ( 
                  <NextButton disabled={disabled}
                    onClick={onClick}>
                    <i className='iconfont'>&#xe6c7;</i>
                  </NextButton>  
                )
              } 
            />
          </div>
      		<Topic />
      		<List />
      	</HomeLeft>
      	<HomeRight>
      		<Recommend />
      		<Writer />
      	</HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><i className="iconfont">&#xe637;</i></BackTop> : null}
      </HomeWrapper>
    );
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }

});

export default connect(mapState, mapDispatch)(Home);