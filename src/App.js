import React, { Component } from 'react';
import './App.css';
import { DogSelect } from './tutorial/DogSelect';
import { DogPhoto } from './tutorial/DogPhoto';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_BREED = gql`
  {
    breed
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Apollo tuts.</h1>
        </header>
        <Query query={GET_BREED}>
          {({ data: { breed } }) => (
            <div>
              <DogSelect breed={breed} />
              <DogPhoto breed={breed} />
            </div>
          )}
        </Query>
      </div>
    );
  }
}

export default App;
