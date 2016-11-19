export const Hero = ($resource, api) => {
  return $resource(`${api}/heroes/:heroId/profile`, {}, {
    get: {
      method: 'GET',
      url: `${api}/heroes/:heroId`
    },
    profile: {
      method: 'GET'
    },
    save: {
      method: 'PATCH',
      responseType: 'text'
    }
  });
};
Hero.$inject = ['$resource', 'api'];
