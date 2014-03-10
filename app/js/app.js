'use strict';


// Declare app level module which depends on filters, and services
var missionEnlightened = angular.module('missionEnlightened', ["firebase"]);

//Login Module
//var loginModule = angular.module('loginModule', ["firebase"]);


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
