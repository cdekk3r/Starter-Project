(function() {
    function HomeCtrl(DataBase, Message) {
        this.database = DataBase;
        this.message = Message;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['DataBase', 'Message', HomeCtrl]);
})();
