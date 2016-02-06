import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          style={{position: 'fixed', backgroundColor: this.props.color, boxShadow: 'none'}}
          title={ this.props.title }
        />
        <div style={{height: '112px'}}></div>
      </div>
    );
  }
}
