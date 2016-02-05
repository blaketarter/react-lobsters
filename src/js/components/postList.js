import React from 'react';

import Post from './post';

export default class PostList extends React.Component {
  render() {
    const postNodes = this.props.posts.map(function(post) {
      post = post.toJS();

      return (
        <Post { ...post } key={post.shortId} />
      );
    });
    
    return (
      <ul className="post-list">
        { postNodes }
      </ul>
    );
  }
};
