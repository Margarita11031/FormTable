/**
 * Created by Margarita on 01.06.2016.
 */

app = angular.module('FormTable',[]);
app.controller("myCtrl",function($scope){
    $scope.people = [];
    $scope.person = {
        ngFirstName:"",
        ngLastName: "",
        ngPhone: "",
        ngGender:"",
        ngAge:"",
    };
    $scope.addData = function() {
        $scope.person.ngFirstName = $scope.firstName;
        $scope.person.ngLastName = $scope.lastName;
        $scope.person.ngPhone = $scope.phone;
        $scope.person.ngGender = $scope.gender;
        $scope.person.ngAge = $scope.age;

        $scope.people.push($scope.person);
    };

});
