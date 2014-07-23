'use strict';

missionEnlightened.controller('MissionController',
        function MissionController($scope, $firebase,sharedProperties) {

            $scope.mission = {};
            $scope.finishForm = {};
            $scope.missionsCompleted = [];
            $scope.missionsIncompleted = [];
            $scope.shared = sharedProperties.getUserInfo;

            var ref = new Firebase("https://dazzling-fire-345.firebaseio.com/missions");
            $scope.missions = $firebase(ref);

            //Save New Mission Function
            $scope.save = function(mission, newMissionForm) {

                if (newMissionForm.$valid)
                {
                    if (_.isUndefined(mission.portalurl)) {
                        mission.portalurl = "";
                    }

                    var data = {name: mission.name, description: mission.description, difficulty: mission.difficulty, portalurl: mission.portalurl, completed: "false", completedbyagent: null};

                    // generate a unique id based on timestamp
                    var id = ref.push().name();
                    // put id into the data
                    data.id = id;
                    ref.child(id).set(data);

                    //$scope.missions.$add();
                    //$scope.newMissionForm.$setPristine();

                    $scope.mission = null;
                }
            };

            //Filter the mission by completion. Split them in different arrays
            $scope.listMissionsStatus = function() {

                //Clean arrays
                $scope.missionsCompleted = [];
                $scope.missionsIncompleted = [];

                ref.once('value', function(allMissionsSnapshot) {
                    allMissionsSnapshot.forEach(function(missionSnapshot) {

                        if (angular.equals(missionSnapshot.child('completed').val(), "true")) {

                            $scope.missionsCompleted.push(missionSnapshot.val());
                        }
                        else
                        {
                            $scope.missionsIncompleted.push(missionSnapshot.val());
                        }
                    });
                });
            };


            //Given an mission it updates the state of completion, setting the agent who completed it. 
            $scope.finishMission = function(finishForm, finishMissionForm) {

                if (finishMissionForm.$valid)
                {
                    ref.child(finishForm.missionID).update({agent: finishForm.agent, completed: "true"});
                    //$scope.finishForm =
                }
            };

            //Initial functions
            
            //$scope.missions.$on('loaded', $scope.listMissionsStatus);
            $scope.missions.$on('child_changed', $scope.listMissionsStatus);
            $scope.listMissionsStatus();
            
        }
);