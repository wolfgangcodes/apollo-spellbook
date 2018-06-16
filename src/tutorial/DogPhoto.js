import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export const DogPhoto = ({ breed }) => (
  <Query
    query={GET_DOG_PHOTO}
    variables={{ breed }}
    skip={!breed}
    pollInterval={500}
    notifyOnNetworkStatusChange
  >
    {({ loading, networkStatus, error, data, refetch }) => {
      if (networkStatus === 4) return 'Refetching!';
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <div>
          <img
            alt="Doge"
            src={data.dog.displayImage}
            style={{ height: 100, width: 100 }}
          />
          <button onClick={refetch}>Refetch!</button>
        </div>
      );
    }}
  </Query>
);
