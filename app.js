var app = angular.module('myapp', []);

app.controller('mainController', function ($scope) {
    // set the default bootswatch name
    $scope.css = 'cosmo';
       
    // create the list of bootswatches
    $scope.bootstraps = [
        { name: 'Slate', url: 'slate' },
        { name: 'Spacelab', url: 'spacelab' },
        { name: 'Cosmo', url: 'cosmo' },
        { name: 'Darkly', url: 'darkly' },
        { name: 'Flatly', url: 'flatly' },
        { name: 'United', url: 'united' },
        { name: 'Paper', url: 'paper' },
        { name: 'Lumen', url: 'Lumen' },
        { name: 'Superhero', url: 'superhero' }
    ];
});

app.controller('CSGO_server_Ajax', function ($scope, $http) {
    $http({method: 'GET', url: 'http://api.michno.me:3000/gameserverquery/csgo/csgoserver.michno.me'}).success(function(data) {
        if (data.map.indexOf('workshop') != -1) {
            data.map = data.map.substring(data.map.lastIndexOf('/')+1, data.map.length);
        };
        $scope.csgoData = data;
        $scope.csgoLoaded = true;
    });
});

app.controller('mumble_server_Ajax', function ($scope, $http) {
    $http({method: 'GET', url: 'http://api.michno.me:3000/gameserverquery/mumbleping/mumble.michno.me'}).success(function(data) {
        $scope.mumbleData = data; // response data 
        $scope.mumbleLoaded = true;
    });
});

app.controller('ts3_server_Ajax', function ($scope, $http) {
    $http({method: 'GET', url: 'http://api.michno.me:3000/gameserverquery/ts3/ts.michno.me/9987'}).success(function(data) {
        data.players.splice(data.players.length-1, 1);
        $scope.ts3Data = data; // response data 
        $scope.ts3Loaded = true;
    });
});       