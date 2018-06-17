import { withClientState } from 'apollo-link-state';

import { defaults } from '../resolvers/defaults';
import { dog } from '../resolvers/dog';
import { selectBreed } from '../resolvers/selectBreed';
import { typeDefs } from '../typeDefs';

export const clientLink = cache =>
  withClientState({
    defaults,
    resolvers: {
      Mutation: { selectBreed },
      Query: { dog },
    },
    typeDefs,
    cache,
  });
