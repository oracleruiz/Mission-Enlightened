'use strict';

/* NavBar Header */
missionEnlightened.directive('header', function() {
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        templateUrl: 'views/partials/header.html'
    };
});


/* Missions */
missionEnlightened.directive('missionItem', function() {
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        templateUrl: 'views/directives/missions/missionItem.html'
    };
});

