export const selectBreed = (_, { breed }, { cache }) => {
  cache.writeData({ data: { breed } });
  return null;
};
