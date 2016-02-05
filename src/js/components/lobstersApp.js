import React from 'react';
import PostListWrapper from './postListWrapper';

export default class LobstersApp extends React.Component {  
  render() {
    return (
      <PostListWrapper postsUrl={ this.props.postsUrl } />
    );
  }
};
