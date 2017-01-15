!function(){"use strict";angular.module("app",["ui.router"])}(),function(){"use strict";function t(t,e){const n={url:"/main",name:"main",controller:"MainController",controllerAs:"main",templateUrl:"app/components/main/main.page.html"};t.state(n),e.otherwise("/main")}angular.module("app").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function t(t){function e(t){for(var e in r.tabs)r.tabs[e].isActive=!1;var e=r.tabs.indexOf(t);r.tabs[e].isActive=!0,r.activeTab=r.tabs[e],n()}function n(){try{if(r.keyword.trim().length<=0)return r.error="",void(r.siteResults=[]);r.loading=!0,r.error="",r.siteResults=[],t[r.activeTab.function](r.keyword).then(function(t){return r.loading=!1,t.data.success?void(r.siteResults=t.data.data):void(r.error=t.data.message)}).catch(function(t){r.loading=!1,r.error=t})}catch(t){r.loading=!1,r.error=t||t.message}}var r=this;r.error="",r.loading="",r.keyword="",r.siteResults=[],r.search=n,r.tabs=[{name:"Google",function:"searchGoogle",isActive:!0},{name:"Bing",function:"searchBing",isActive:!1}],r.activeTab=r.tabs[0],r.toggleTab=e}angular.module("app").controller("MainController",t),t.$inject=["MainFactory"]}(),function(){"use strict";function t(t,e){function n(n){return t.get(e("/search/google/{{keyword}}")({keyword:n}))}function r(n){return t.get(e("/search/bing/{{keyword}}")({keyword:n}))}const a={searchGoogle:n,searchBing:r};return a}angular.module("app").factory("MainFactory",t),t.$inject=["$http","$interpolate"]}();