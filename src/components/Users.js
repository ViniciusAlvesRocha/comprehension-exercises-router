import React, { Component } from 'react';

class Users extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const { greetingMessege = 'Hi There' } = this.props;

    const { id } = this.props.match.params
    return (
      <div>
      <h2>Users</h2>
      <p>{ greetingMessege }, this is my awesome Users component</p>
      <p>Identificação do Usuário: {id}</p>
    </div>
    )
  }
}

export default Users;
