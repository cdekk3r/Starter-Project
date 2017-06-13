(function() {
    function HomeCtrl(DataBase) {
        this.database = DataBase;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['DataBase', HomeCtrl]);
})();
