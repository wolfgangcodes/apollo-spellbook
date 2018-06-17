import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

export const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      displayImage
    }
  }
`;

const SELECT_BREED = gql`
  mutation SelectBreed($breed: String!) {
    selectBreed(breed: $breed) @client
  }
`;

export const DogSelect = ({ breed }) => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <Mutation mutation={SELECT_BREED} ignoreResults={true}>
          {selectBreed => (
            <select
              name="dog"
              onChange={evt => {
                selectBreed({ variables: { breed: evt.target.value } });
              }}
              value={breed}
            >
              {data.dogs.map(dog => (
                <option key={dog.id} value={dog.breed}>
                  {dog.breed}
                </option>
              ))}
            </select>
          )}
        </Mutation>
      );
    }}
  </Query>
);

export default DogSelect;
