function randomFrom(array) {
  return array[Math.floor(Math.random()*array.length)]
}

function filter_available(item) {
  return !item.unreleased
}

String.prototype.format = function(scope) {
    eval(Object.keys(scope).map(
        function(x) { return "var " + x + "=scope." + x
    }).join(";"));
    return this.replace(/{(.+?)}/g, function($0, $1) {
        return eval($1);
    })
};

angular.module('splatApp').util = function($scope) {
  $scope.redirect = function(lang) {
    var URL = "http://dev.loadout.ink/" + lang + "/"
    if(window.location.hash) URL += window.location.hash;
    if (typeof(Storage) !== "undefined") {
      localStorage.selectedLang = lang;
    }
    window.location = URL;
  }
}
