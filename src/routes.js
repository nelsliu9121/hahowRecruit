export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/heroes');

  $stateProvider
    .state('heroes', {
      url: '/heroes',
      views: {
        "": {
          template: '<heroes></heroes>'
        }
      }
    })
    .state('heroes.profile', {
      url: '/:heroId',
      views: {
        detail: {
          template: '<hero-profile></hero-profile>'
        }
      }
    });
}
