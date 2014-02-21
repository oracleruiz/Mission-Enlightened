angular.module('App.filters', []).filter('completedFilter', [function () {
    return function (mission, value) {
        if (!angular.isUndefined($scope.missions)) {
            var tempMissions = [];
            angular.forEach($scope.missions, function (mission) {
               if (angular.equals(client.company.id, id)) {
                    tempClients.push(client);
                }
            });
            return tempClients;
        } else {
            return clients;
        }
    };
}]);