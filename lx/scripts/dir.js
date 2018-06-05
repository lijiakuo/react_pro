function dir(){
    return {
        restrict:'ECMA',
        templateUrl:'../template/home.html',
        controller:['$scope','ajax',function($scope,ajax){
            $scope.defer=ajax({
                url:'http://localhost:3000/dls',
                method:'GET'
            })
            $scope.$watch('defer.value',function(newVal,oldVal){
                if(newVal!=oldVal){
                    $scope.arr=newVal;
                    console.log(newVal);
                }
            })
        }]
    }
}
// function dir1(){
//     return {
//         templateUrl:'../template/home.html',
        
//         controller:['$scope','ajax',function($scope,ajax){
//             $scope.defer=ajax({
//                 url:'http://localhost:3000/dls',
//                 method:'GET'
//             })
//             $scope.$watch('defer.value',function(newVal,oldVal){
//                 if(newVal!=oldVal){
//                     $scope.arr=newVal;
//                     console.log(newVal);
//                 }
//             })
//         }]
//     }
// }
angular.module('myApp')
    .directive('dir',dir)
    // .directive('dir',dir1);