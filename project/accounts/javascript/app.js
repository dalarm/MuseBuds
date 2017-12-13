var app = angular.module('ProfileApp', [
     'ui.router',
     'restangular'
 ])
 
 app.config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
     // For any unmatched url, send to /route1
     $urlRouterProvider.otherwise("/");
     $stateProvider
         .state('index', {
 
             url: "/",
             templateUrl: "/static/html/partials/_job_list.html",
             controller: "JobList"
         })
 
        .state('new', {
 
             url: "/new",
             templateUrl: "/jobs/job-form",
             controller: "ProfileFormCtrl"
         })
 })
 
 app.controller("ProfileFormCtrl", ['$scope', 'Restangular', 'CbgenRestangular', '$q',
 function ($scope, Restangular, CbgenRestangular, $q) {
 
 
 }])// end controller
 
 
