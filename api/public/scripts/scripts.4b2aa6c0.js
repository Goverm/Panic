"use strict";angular.module("frontendApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","uiGmapgoogle-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/map",{templateUrl:"views/map.html",controller:"MapCtrl"}).otherwise({redirectTo:"/"})}]).config(["uiGmapGoogleMapApiProvider",function(a){a.configure({key:"AIzaSyDI04z9p-iLuBheMNG9AJMnNS66w99zClw",v:"3.17",libraries:"weather,geometry,visualization"})}]),angular.module("frontendApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("frontendApp").controller("MapCtrl",["$scope",function(a){a.map={center:{latitude:40.1451,longitude:-99.668},zoom:4,bounds:{}},a.options={scrollwheel:!1},a.panicMarkers=[{id:"554dca1e94cbfddc051bc53f",latitude:69,longitude:69,title:"Alvin"},{id:"554e2e9be6516e18108f6e6c"},{id:"554e2f0b913053b40a2a9935"},{id:"554e3484b495c7f4136bed98",latitude:19,longitude:69,title:"Alvin"},{id:"554e35c4bb4df778141a87d9",latitude:29,longitude:29,title:"AlvinGG"},{id:"554e35d5bb4df778141a87da",latitude:69,longitude:69,title:"AlvinGG"}];for(var b=0,c=a.panicMarkers.length;c>b;b++)a.panicMarkers[b].onClick=function(){ret.show=!ret.show}}]);