import React from 'react';

export default class Post extends React.Component {
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
