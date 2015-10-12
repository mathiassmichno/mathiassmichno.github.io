var app = angular.module('myapp', []);

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
    $scope.getData = function(){
        $http.get('http://api.michno.me:3000/gameserverquery/csgo/csgoserver.michno.me').then(function(response) {
            if (response.data.map.indexOf('workshop') != -1) {
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
        }, 10000);
    };

    // Kick off the interval
    $scope.getData();
    $scope.intervalFunction();  
    
});

app.controller('mumble_server_Ajax', function($scope, $http) {
    $http({method: 'GET', url: 'http://api.michno.me:3000/gameserverquery/mumbleping/mumble.michno.me'}).success(function(data) {
        $scope.mumbleData = data; // response data 
        $scope.mumbleLoaded = true;
    });
});

app.controller('ts3_server_Ajax', function($scope, $http) {
    $http({method: 'GET', url: 'http://api.michno.me:3000/gameserverquery/ts3/ts.michno.me/9987'}).success(function(data) {
        data.players.splice(data.players.length-1, 1);
        $scope.ts3Data = data; // response data 
        $scope.ts3Loaded = true;
    });
});       