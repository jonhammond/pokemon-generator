var app = angular.module('myApp', []);

app.controller('PokemonController', ['$scope', '$http', function($scope, $http) {
  $scope.pokemonImg= "Pokemon image comes in here!";
  $scope.pokemonMove= "Pokemon move comes in here!";
  $scope.showPokemon= false;
  $scope.pokeNum = Math.floor(Math.random()*699) + 1;
  pokeNum = $scope.pokeNum;

  $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/' + pokeNum,
  })
  .then(function(results) {
    console.log(results);
    $scope.pokeName = results.data.name;
    $scope.pokeImg = results.data.sprites.front_default;
  })
}]);
