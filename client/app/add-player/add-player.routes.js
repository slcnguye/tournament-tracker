'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('league.add-player', {
      url: '/tournament/{tournamentId:int}/players',
      template: '<add-player></add-player>'
    });
}
