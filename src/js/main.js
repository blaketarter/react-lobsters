import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';

class PostModel {
  constructor(options) {
    this.title = options.title;
    this.url = options.url;
    this.tags = options.tags;
    this.score = options.score;
    this.author = options.submitter_user.username;
    this.created = moment(options.created_at).fromNow();
    this.commentCount = options.comment_count;
    this.commentsUrl = options.comments_url;
    this.description = options.description;
    this.shortId = options.short_id;
    this.shortIdUrl = options.short_id_url;
  }
}

class CommentModel {
  constructor(options) {
    this.indentLevel = options.indent_level;
    this.score = options.score;
    this.author = options.commenting_user.username;
    this.created = moment(options.created_at).fromNow();
    this.comment = options.comment;
    this.collapsed = false;
    this.commentCollapsed = false;
  }
}

class LobstersApp extends React.Component {  
  render() {
    return (
      <PostListWrapper postsUrl={ this.props.postsUrl } />
    );
  }
};

class PostListWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    axios
    .get(this.props.postsUrl)
    .then((res) => {
      this.setState({
        posts: res.data.map((raw) => new PostModel(raw))
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
