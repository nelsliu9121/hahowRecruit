export const Heroes = ($resource, api) => {
  return $resource(`${api}/heroes`, {}, {
    get: {
      method: 'GET',
      isArray: true
    }
  });
};
Heroes.$inject = ['$resource', 'api'];
