export const Heroes = ($resource, api) => {
  /**
   * @ngdoc service
   * @name app.Heroes
   *
   * @requires $resource
   * @requires api.constant
   *
   * @description
   * Resource service for Heroes
   *
   * @func {object[]} get Get a list of heroes
   */
  return $resource(`${api}/heroes`, {}, {
    get: {
      method: 'GET',
      isArray: true
    }
  });
};
Heroes.$inject = ['$resource', 'api'];
