'use strict';

missionEnlightened.controller('AgentController',
	function AgentController($scope, $firebase){

		var ref = new Firebase("https://dazzling-fire-345.firebaseio.com/agents");
		$scope.agents = $firebase(ref);

		
		//Save Function
		$scope.save = function(mission,newMissionForm){

		/*	if(newMissionForm.$valid)
			{
				if(_.isUndefined(mission.portalurl)){
					mission.portalurl = "";
				}

				var data = {name: mission.name, description: mission.description, difficulty: mission.difficulty, portalurl: mission.portalurl, completed:"false", completedbyagent:null};
				
				// generate a unique id based on timestamp
				var id = ref.push().name(); 
				// put id into the data
				data.id = id;
				ref.child(id).set(data);

				//$scope.missions.$add();
				//$scope.newMissionForm.$setPristine();

				$scope.mission = null;
			}*/
		};
	}
);