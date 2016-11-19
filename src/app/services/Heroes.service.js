export const Heroes = ($resource, api) => {
  return $resource(`${api}/heroes`, {}, {
    get: {
      action: 'GET',
      isArray: true
    }
  });
};
