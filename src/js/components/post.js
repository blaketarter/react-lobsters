import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import RaisedButton from 'material-ui/lib/raised-button';
import IconButton from 'material-ui/lib/icon-button';
import Divider from 'material-ui/lib/divider';

export default class Post extends React.Component {
  render() {
    const tagNodes = this.props.tags.map(function(tag) {
      return (
        <FlatButton
          key={tag}
          label={ tag }
          linkButton={ false }
          href='#'
          backgroundColor='#ccc'
        />
      );
    });
    
    return (
      <li>
        <Card className="card">
          <CardTitle
            title={ this.props.title }
            subtitle={ this.props.url }
            style={{paddingBottom: '0'}}
          />
          <CardActions
            style={{padding: '16px 16px 0 16px'}}
            className='card-actions'
          >
            { tagNodes }
          </CardActions>
          <Divider />
          <CardText>
            <span className="post-score">{ this.props.score }</span>
            <span className="post-author">{ ('via ' + this.props.author) }</span>
            <span className="post-created">{ this.props.created }</span>
            <div className="post-comment-count">{ (this.props.commentCount + (this.props.commentCount === 1 ? ' comment' : ' comments')) }</div>
          </CardText>
        </Card>
      </li>
    );
  }
};
