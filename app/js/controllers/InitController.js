'use strict';

missionEnlightened.controller('InitController',
        function InitController($scope, $firebase,sharedProperties) {

            //Flag that states if the user is signed with Google+
            $scope.signedIn = true;

            //Flag that states if the user is already accepted by the admin to browse the site
            $scope.registered = true;
            
            
            $scope.player = {
                id: "",
                name: "",
                nick: ""
            };
            
            $scope.agents = {};
            
            $scope.firebasepath = "https://dazzling-fire-345.firebaseio.com/agents";
            
            var refFirebase = new Firebase($scope.firebasepath);
            //Brings all agents data
            refFirebase.once('value', function(snap) {
                $scope.agents = snap.val() || {};
            });
            

            //Check is a user is already registered            
            $scope.isRegistered = function(playerID) {                
                var exist = false;                
                for (var ag in $scope.agents) {
                    if ($scope.agents[ag].gplusid === playerID)
                    {
                        exist = true;
                        
                    }
                }
                if(!exist){
                    $scope.registered = false;
                }
                return exist;                
            };
            
            //This function fills the info user for the current session
            $scope.initAgent = function(){
                sharedProperties.signedIn();
                //sharedProperties.setUserRightsLevel(agent.type);
                console.log(1);
            };

            //Register a new Agent
            $scope.registerNewUser = function(player,playerForm) {              
                                
                if (playerForm.$valid)
                {                  
                    var ref = new Firebase($scope.firebasepath);                    
                
                    //Type 3 is just reader which is the default
                    var agentData = {gplusid:player.id, nick:player.nick, name:player.name, points: 0, type: 1};
                    
                    // generate a unique id based on timestamp
                    var id = ref.push().name();
                    // put id into the data
                    agentData.id = id;
                    //Save the data
                    ref.child(id).set(agentData);
                    
                    
                    $scope.player = {};                                        
                    $scope.registered = true;                     
                    sharedProperties.signedIn();

                    window.location = "index.html";                                         
                }                
            };
            
            
        }
);
