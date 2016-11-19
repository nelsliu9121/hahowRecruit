export const Hero = ($resource, api) => {
  return $resource(`${api}/heroes/:heroId`, {}, {
    get: {
      action: 'GET'
    },
    profile: {
      action: 'GET',
      url: `${api}/heroes/:heroId/profile`
    },
    update: {
      action: 'PATCH',
      url: `${api}/heroes/:heroId/profile`
    }
  });
};
