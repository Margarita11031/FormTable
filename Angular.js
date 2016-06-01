/**
 * Created by Margarita on 01.06.2016.
 */

app = angular.module('FormTable',[]);
app.controller("myCtrl",['$scope', '$filter', function($scope, $filter){
    $scope.people = [];
    $scope.addData = function() {
        var person = {
            ngFirstName:$scope.firstName,
            ngLastName: $scope.lastName,
            ngPhone: $scope.phone,
            ngGender:$scope.gender,
            ngAge:$scope.age,
        };
        $scope.people.push(person);
        $scope.order('ngFirstName');
        clearUpFields_void();
    };

    $scope.removeData = function(curPers) {
        $scope.people.splice($scope.people.indexOf(curPers),1);
    };

    var orderBy = $filter('orderBy');
    $scope.order = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.people = orderBy($scope.people, predicate, $scope.reverse);
    };
}]);
