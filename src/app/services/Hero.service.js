export const Hero = ($resource, api) => {
  /**
   * @ngdoc service
   * @name app.Heroes
   *
   * @requires $resource
   * @requires api.constant
   *
   * @description
   * Resource service for hero
   *
   * @func {object} get Get a hero's info by ID
   * @func {object} profile Get a hero's attributes by ID
   * @func {plain} save Save updated info to server
   */
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
