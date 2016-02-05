import React from 'react';
import axios from 'axios';
import * as Immutable from 'immutable';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

import PostList from './postList';
import createPost from '../models/post';

@immutableRenderDecorator
export default class PostListWrapper extends React.Component {
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
