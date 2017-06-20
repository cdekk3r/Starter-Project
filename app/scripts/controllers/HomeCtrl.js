(function() {
    function HomeCtrl(DataBase, Message) {
        this.database = DataBase;
        this.message = Message;

        Message.messages = null;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['DataBase', 'Message', HomeCtrl]);
})();
