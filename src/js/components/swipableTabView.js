import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import SwipeableViews from 'react-swipeable-views';
import PostListWrapper from './postListWrapper';

export default class SwipeableTabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    const tabNodes = this.props.tabs.map(function(tab, i) {
      return <Tab key={ i } label={ tab.label } value={ i } />
    });

    const viewNodes = this.props.tabs.map(function(tab, i) {
      return <PostListWrapper key={ i } postsUrl={ tab.url } />
    });

    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={{position: 'fixed', top: '64px', left: '0', width: '100%', zIndex: '2'}}
          className='tabs'
          inkBarStyle={{backgroundColor: 'white'}}
        >
          { tabNodes }
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          { viewNodes }
        </SwipeableViews>
      </div>
    );
  }
}
