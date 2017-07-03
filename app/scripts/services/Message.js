(function() {
    function Message($firebaseArray, $cookies) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
      Message.messages = $firebaseArray(ref);

      Message.getByRoomId = function(roomId) {
          Message.roomId = roomId;
          Message.messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      };

      Message.send = function(text) {
          var currentUser = $cookies.get('blocChatCurrentUser') || "Guest";
          var newMessage = {
            content:text,
            roomId:Message.roomId,
            sentAt:Date.now(),
            username:currentUser,
          };

          Message.messages.$add(newMessage);
            console.log(newMessage);
      };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message])
})();
