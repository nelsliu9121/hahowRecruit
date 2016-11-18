export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/heroes');

  $stateProvider
    .state('heroes', {
      url: '/heroes',
      template: '<heroes></heroes>'
    })
    .state('heroes.profile', {
      url: '/:heroId',
      views: {
        'detail': {
          template: '<hero></hero>'
        }
      }
    });
}
