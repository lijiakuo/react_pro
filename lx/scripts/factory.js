function ajax($http,$q){
    return function(obj){
        var defer=$q.defer();
        $http(obj)
            .then(function(result){
                defer.resolve(result.data);
            },function(error){
                defer.reject(error);
            })
        return defer.promise.$$state;
    }
}
angular.module('myApp')
    .factory('ajax',ajax)