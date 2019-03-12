import React, { Component, Fragment } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    const { repositoryInput } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository} action="">
          <input
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>facebook/react</strong>
              {''}
              (description)
            </p>
            <a href="http://github.com/facebook/react">See repo</a>
          </li>
        </ul>
      </Fragment>
    );
  }
}
