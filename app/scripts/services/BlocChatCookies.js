(function() {
    function BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === '' || currentUser === "Guest") {
            currentUser = prompt("Enter username") || "Guest";
            $cookies.put('blocChatCurrentUser', currentUser);
        }
      }

      angular
          .module('blocChat')
          .run(['$cookies', BlocChatCookies]);
})();
