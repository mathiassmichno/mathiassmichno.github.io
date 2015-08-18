var app = angular.module('myapp', []);

app.controller('CSGO_server_Ajax', function ($scope, $http) {
    $http({method: 'GET', url: 'http://api.michno.me:3000/gameserverquery/csgo/csgoserver.michno.me'}).success(function(data) {
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