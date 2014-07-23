'use strict';


// Declare app level module which depends on filters, and services
var missionEnlightened = angular.module('missionEnlightened',["firebase","ngRoute"]);

//Login Module
//var loginModule = angular.module('loginModule', ["firebase"]);

missionEnlightened.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
                
                .when('/missions', {
                    templateUrl: 'views/partials/missions/missionDashboard.html',
                    controller: 'MissionController'
                })
                .when('/addMission', {
                    templateUrl: 'views/partials/missions/addMission.html',
                    controller: 'MissionController'
                })
                .when('/', {
                    templateUrl: 'views/mainView.html',
                    controller: 'MissionController'
                })
                .otherwise({
                    redirectTo: '/'
                });
    }]);
