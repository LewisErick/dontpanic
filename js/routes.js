angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('inicio', {
    url: '/page1',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('pulso', {
    url: '/page3',
    templateUrl: 'templates/pulso.html',
    controller: 'pulsoCtrl'
  })

  .state('personaCPR', {
    url: '/page4',
    templateUrl: 'templates/personaCPR.html',
    controller: 'personaCPRCtrl'
  })

  .state('personaHeimlich', {
    url: '/page15',
    templateUrl: 'templates/personaHeimlich.html',
    controller: 'personaHeimlichCtrl'
  })

  .state('rCPAdulto', {
    url: '/page5',
    templateUrl: 'templates/rCPAdulto.html',
    controller: 'rCPAdultoCtrl'
  })

  .state('rCPBeb', {
    url: '/page8',
    templateUrl: 'templates/rCPBeb.html',
    controller: 'rCPBebCtrl'
  })

  .state('rCPAdultoParte2', {
    url: '/page7',
    templateUrl: 'templates/rCPAdultoParte2.html',
    controller: 'rCPAdultoParte2Ctrl'
  })

  .state('rCPBebParte2', {
    url: '/page9',
    templateUrl: 'templates/rCPBebParte2.html',
    controller: 'rCPBebParte2Ctrl'
  })

  .state('atragantamiento', {
    url: '/page10',
    templateUrl: 'templates/atragantamiento.html',
    controller: 'atragantamientoCtrl'
  })

  .state('toser', {
    url: '/page12',
    templateUrl: 'templates/toser.html',
    controller: 'toserCtrl'
  })

  .state('atragantamientoConsciencia', {
    url: '/page13',
    templateUrl: 'templates/atragantamientoConsciencia.html',
    controller: 'atragantamientoConscienciaCtrl'
  })

  .state('heimlichAdulto', {
    url: '/page16',
    templateUrl: 'templates/heimlichAdulto.html',
    controller: 'heimlichAdultoCtrl'
  })

  .state('heimlichBeb', {
    url: '/page19',
    templateUrl: 'templates/heimlichBeb.html',
    controller: 'heimlichBebCtrl'
  })

  .state('quemadura', {
    url: '/page20',
    templateUrl: 'templates/quemadura.html',
    controller: 'quemaduraCtrl'
  })

  .state('calor', {
    url: '/page21',
    templateUrl: 'templates/calor.html',
    controller: 'calorCtrl'
  })

  .state('electricidad', {
    url: '/page24',
    templateUrl: 'templates/electricidad.html',
    controller: 'electricidadCtrl'
  })

  .state('quMica', {
    url: '/page25',
    templateUrl: 'templates/quMica.html',
    controller: 'quMicaCtrl'
  })

  .state('hemorragia', {
    url: '/page26',
    templateUrl: 'templates/hemorragia.html',
    controller: 'hemorragiaCtrl'
  })

  .state('fractura', {
    url: '/page11',
    templateUrl: 'templates/fractura.html',
    controller: 'fracturaCtrl'
  })

  .state('reposo', {
    url: '/page14',
    templateUrl: 'templates/reposo.html',
    controller: 'reposoCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});