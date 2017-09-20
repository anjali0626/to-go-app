angular.module('to-go-app', [])
.controller('AppCtrl', function() {
  this.username = 'Anjali';
})
.component('app', {
  controller:'AppCtrl',
  templateUrl: 'templates/app.html'
});