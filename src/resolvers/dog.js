export const dog = (obj, args, context, info) => {
  return Object.values(context.cache.data.data).filter(
    dog => dog.__typename === 'Dog' && dog.breed === args.breed
  )[0];
};
