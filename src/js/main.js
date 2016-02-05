import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';
import * as Immutable from 'immutable';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

import createPost from './models/post';
import createComment from './models/comment';

class LobstersApp extends React.Component {  
  render() {
    return (
      <PostListWrapper postsUrl={ this.props.postsUrl } />
    );
  }
};

@immutableRenderDecorator
class PostListWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: Immutable.List()
    };

    axios
    .get(this.props.postsUrl)
    .then((res) => {
      this.setState({
        posts: Immutable.List(res.data.map((raw) => createPost(raw)))
      });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <PostList posts={ this.state.posts } />
    );
  }
};

class PostList extends React.Component {
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

class Post extends React.Component {
  render() {
    const tagNodes = this.props.tags.map(function(tag) {
      return (
        <li className="tag" key={tag}>{ tag }</li>
      );
    });
    
    return (
      <li className="card">
        <h3 className="post-title">{ this.props.title }</h3>
        <a className="post-url" href={ this.props.url } target="_blank">{ this.props.url }</a>
        <ul className="post-info">
          <li className="post-score">{ this.props.score }</li>
          <li className="post-author">{ ('via ' + this.props.author) }</li>
          <li className="post-created">{ this.props.created }</li>
        </ul>
        <ul className="post-tags-container" items="{{ tags }}">
          { tagNodes }
        </ul>
        <span className="post-comment-count">{ (this.props.commentCount + (this.props.commentCount === 1 ? ' comment' : ' comments')) }</span>
        <span className="share">Share</span>
      </li>
    );
  }
};

ReactDOM.render(
  <LobstersApp postsUrl="http://lobste.rs/hottest.json" />,
  document.getElementById('root')
);
