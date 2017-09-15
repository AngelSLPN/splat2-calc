angular
  .module('splatApp', ['ui.bootstrap', 'ngAnimate', 'ngAria', 'pascalprecht.translate'])
  .controller('splatController', ['$scope', '$rootScope', '$timeout', '$translate', '$locale', function splatCtrl($scope, $rootScope, $timeout, $translate, $locale, $uibModal, $log) {
    $scope.placeholder = ["PH Data", "More PH Data", "Hello"];
    $scope.dummy = $scope.placeholder[0];
    angular.module('splatApp').skills($scope);
    angular.module('splatApp').stats($scope, $translate);
    angular.module('splatApp').weapons($scope);
    angular.module('splatApp').subs($scope);
    angular.module('splatApp').specials($scope);
    angular.module('splatApp').gear($scope);

    angular.module('splatApp').clipboard($scope, $timeout);
    angular.module('splatApp').util($scope);

    $scope.loadout = new Loadout();
    $scope.status = {}

    $scope.screenshotMode = false;

    $scope.switchSet = function() {
      $scope.loadout.weapon = $scope.availableWeapons()[0];
    }

    $scope.availableWeapons = function() {
      return $scope.selectedSet.weapons.filter(filter_available)
    }

    $scope.selectedSet = $scope.weaponSets[0];
    $scope.loadout.weapon = $scope.availableWeapons()[0];
    $scope.loadout.head.equipped = $scope.hats[0];
    $scope.loadout.clothes.equipped = $scope.clothes[0];
    $scope.loadout.shoes.equipped = $scope.shoes[0];

    $scope.refreshStats = function() {
      Object.keys($scope.stats).forEach(function(currentKey) {
          $scope.stats[currentKey].calc($scope.loadout);
      });
    }

     $scope.$watch('loadout', function() {
       $scope.refreshStats();
       history.replaceState(undefined, undefined, "#" + $scope.encodeLoadout())
     },true);

    $scope.encodeLoadout = function() {
      return encode($scope.selectedSet.id,$scope.loadout)
    }

    $scope.loadCode = function(code) {
      var newLoadout = new Loadout();
      var results = decode(code)
      if(results) {
      $scope.selectedSet = $scope.getWeaponSetById(results.set)
      newLoadout.weapon = $scope.getWeaponById(results.set,results.weapon)
      newLoadout.head.equipped = $scope.getHatById(results.head.gear)
      newLoadout.clothes.equipped = $scope.getClothesById(results.clothes.gear)
      newLoadout.shoes.equipped = $scope.getShoesById(results.shoes.gear)
      newLoadout.head.main = $scope.getSkillById(results.head.main)
      for(var i=0; i<3; i++) {
        newLoadout.head.subs[i] = $scope.getSkillById(results.head.subs[i])
      }
      newLoadout.clothes.main = $scope.getSkillById(results.clothes.main)
      for(var i=0; i<3; i++) {
        newLoadout.clothes.subs[i] = $scope.getSkillById(results.clothes.subs[i])
      }
      newLoadout.shoes.main = $scope.getSkillById(results.shoes.main)
      for(var i=0; i<3; i++) {
        newLoadout.shoes.subs[i] = $scope.getSkillById(results.shoes.subs[i])
      }

      return newLoadout
    }
      return false;
    }

    $scope.encodedURL = function() {
      return window.location.protocol +"//"+ window.location.hostname + window.location.pathname + "#" + $scope.encodeLoadout()
    }

    $scope.randomizeBuild = function() {
      var randomized = new Loadout()
      $scope.selectedSet = randomFrom($scope.weaponSets)
      randomized.weapon = randomFrom($scope.availableWeapons())
      randomized.head.equipped = randomFrom($scope.hats)
      randomized.clothes.equipped = randomFrom($scope.clothes)
      randomized.shoes.equipped = randomFrom($scope.shoes)
      $scope.loadout = randomized
    }

    $scope.resetLoadout = function() {
      $scope.loadout.clearAbilities();
      $scope.selectedSet = $scope.weaponSets[0];
      $scope.loadout.weapon = $scope.availableWeapons()[0];
      $scope.loadout.head.equipped = $scope.hats[0];
      $scope.loadout.clothes.equipped = $scope.clothes[0];
      $scope.loadout.shoes.equipped = $scope.shoes[0];
    }

    if(window.location.hash) {
      var newLoadout = $scope.loadCode(window.location.hash.replace('#',''))
      if(newLoadout) {
        $scope.loadout = newLoadout
      }
    }

    $rootScope.currentLanguage = $translate.use();
    if(typeof(Storage) !== 'undefined') {
      if(localStorage.getItem('chosenLanguage') !== null) {
         $rootScope.currentLanguage = localStorage.getItem('chosenLanguage');
         $translate.use($rootScope.currentLanguage)
      }
    }


    $scope.changeLanguage = function(langKey) {
      $rootScope.currentLanguage = (langKey);
      if(typeof(Storage) !== 'undefined') localStorage.setItem('chosenLanguage', langKey)
      $translate.use(langKey);
      $scope.refreshStats();
    }

    $scope.languages = {
      'en_US': 'English',
      'ja_JP': '日本語',
      'fr_FR': 'Français'
    }
  }])

  .config(['$translateProvider', function($translateProvider) {
    // $translateProvider
    //   .translations('en-us', en_strings)
    //   .translations('ja-jp', jp_strings)
    //   .translations('fr-fr', fr_strings)
    //   .translations('es-es', es_strings)
    //   .translations('it', it_strings)
    //   .preferredLanguage('en-us')
}]);
