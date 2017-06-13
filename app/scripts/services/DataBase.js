(function() {
  function DataBase($firebaseArray) {
    var DataBase = {};
    var ref = firebase.database().ref().child("rooms");
    DataBase.rooms = $firebaseArray(ref);

    return DataBase;
  }

  angular
    .module('blocChat')
    .factory('DataBase', ['$firebaseArray', DataBase]);
})();
