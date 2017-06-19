(function() {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
      Message.messages = $firebaseArray(ref);

      Message.getByRoomId = function(roomId) {
          Message.messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message])
})();
