import React, { Component } from 'react';

class Home extends Component {
  render() {
    const { greetingMessage } = this.props;
    return (
      <div>
        <h2>Home</h2>
        <p>{greetingMessage}</p>
      </div>
    );
  }
}

export default Home;
