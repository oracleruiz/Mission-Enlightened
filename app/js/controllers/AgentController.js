'use strict';

missionEnlightened.controller('AgentController',
	function AgentController($scope, $firebase){

		$scope.agentTypes = [ {name:"Human",value:1},
							  {name:"Colaborator",value:2},
							  {name:"Admin", value:3}];
					

		var ref = new Firebase("https://dazzling-fire-345.firebaseio.com/agents");
		$scope.agents = $firebase(ref);

		
		/*$scope.$watchCollection('agents', function(newNames, oldNames) {
            console.log(newNames);
            console.log(oldNames);
        });*/

		$scope.updateType = function(agent,type){
			ref.child(agent).update({type: type});
		};
	}
);