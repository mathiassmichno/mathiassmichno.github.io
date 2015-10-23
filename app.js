var updateInterval = 5000;

var app = angular.module('myapp', [])
.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|steam):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);

app.controller('mainController', function($scope) {
    // set the default bootswatch name
    $scope.css = 'cosmo';
       
    // create the list of bootswatches
    $scope.bootstraps = [
        { name: 'Cosmo', url: 'cosmo' },
        { name: 'Slate', url: 'slate' },
        { name: 'Spacelab', url: 'spacelab' },
        { name: 'Darkly', url: 'darkly' },
        { name: 'Flatly', url: 'flatly' },
        { name: 'Yeti', url: 'yeti' },
        { name: 'Lumen', url: 'lumen' },
        { name: 'Superhero', url: 'superhero' },
        { name: 'Cerulean', url: 'cerulean' }        
    ];
});

app.controller('CSGO_server_Ajax', function($scope, $http, $interval) {
    $scope.csgoHost = "csgoserver.michno.me"
    $scope.getData = function(){
        $http.get('http://api.michno.me:3000/gameserverquery/csgo/' + $scope.csgoHost).then(function(response) {
            if (response.data.status == "online" && response.data.map.indexOf('workshop') != -1) {
                response.data.map = response.data.map.substring(response.data.map.lastIndexOf('/')+1, response.data.map.length);
            };
            $scope.csgoData = response.data;
            $scope.csgoLoaded = true;
        }); 
    };
    
    // Function to replicate setInterval using $timeout service.
    $scope.intervalFunction = function(){
        $interval(function() {
            $scope.getData();
        }, updateInterval);
    };

    // Kick off the interval
    $scope.getData();
    $scope.intervalFunction();  
    
});

app.controller('mumble_server_Ajax', function($scope, $http, $interval) {
    $scope.getData = function(){
        $http.get('http://api.michno.me:3000/gameserverquery/mumbleping/mumble.michno.me').then(function(response) {
            $scope.mumbleData = response.data;
            $scope.mumbleLoaded = true;
        }); 
    };
    
    // Function to replicate setInterval using $timeout service.
    $scope.intervalFunction = function(){
        $interval(function() {
            $scope.getData();
        }, updateInterval);
    };

    // Kick off the interval
    $scope.getData();
    $scope.intervalFunction(); 

});

app.controller('ts3_server_Ajax', function($scope, $http, $interval) {
    $scope.getData = function(){
        $http.get('http://api.michno.me:3000/gameserverquery/ts3/ts.michno.me/9987/').then(function(response) {
            if (response.status == 200 && response.data.players) {
                response.data.players.splice(response.data.players.length-1, 1); 
            };
            $scope.ts3Data = response.data;
            $scope.ts3Loaded = true;
        }); 
    };
    
    // Function to replicate setInterval using $timeout service.
    $scope.intervalFunction = function(){
        $interval(function() {
            $scope.getData();
        }, updateInterval);
    };

    // Kick off the interval
    $scope.getData();
    $scope.intervalFunction();   
});       