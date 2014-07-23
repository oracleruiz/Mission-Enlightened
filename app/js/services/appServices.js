'use strict';
missionEnlightened.service('sharedProperties', function() {

    var userInfo = {
        id: "",
        name: "",
        nick: "",
        pic: "",
        signed: false,
        rigthsLevel: 1
    };


    return {
        getUserInfo: function() {
            return userInfo;
        },
        getUserRightsLevel: function() {
            return userInfo.rigthsLevel;
        },
        setUserRightsLevel: function(level) {
            userInfo.rigthsLevel = level;
        },
        isSigned: function() {
            return userInfo.signed;
        },
        signedIn: function() {
            userInfo.signed = true;
        },        
        disconnect: function(){
            userInfo = [];  
        }
    };
});

