import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Recommend extends Component {

  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
      	{ list.map((item) => (
          <Link to='#' key={item.get('id')}> 
            <RecommendItem imgUrl={item.get('imgUrl')}  />
          </Link> 
      	)) }
      </RecommendWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);