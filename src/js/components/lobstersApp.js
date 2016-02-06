import React from 'react';
import PostListWrapper from './postListWrapper';
import NavBar from './navBar';

export default class LobstersApp extends React.Component {  
  render() {
    return (
      <div>
        <NavBar title={ this.props.title } color={ this.props.color } />
        <PostListWrapper postsUrl={ this.props.postsUrl } />
      </div>
    );
  }
};
