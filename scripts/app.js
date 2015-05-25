(function() {
  'use strict';
  angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'easypiechart', 'mgo-angular-wizard', 'textAngular', 'ui.tree', 'ngMap', 'ngTagsInput', 'app.ui.ctrls', 'app.ui.directives', 'app.ui.services', 'app.controllers', 'app.directives', 'app.form.validation', 'app.ui.form.ctrls', 'app.ui.form.directives', 'app.tables', 'app.map', 'app.task', 'app.localization', 'app.chart.ctrls', 'app.chart.directives', 'app.page.ctrls','appUser','userRest','appArticle','articleRest','appScheduler','schedulerRest','appNotification','notificationRest','appVideo','videoRest','appImage','imageRest','appVote','voteRest','registeruserRest','appRegisteruser','appMembership','membershipRest','appState','stateRest','appMlaconstituency','mlaconstituencyRest','appMpconstituency','mpconstituencyRest','appPosition','positionRest','appRegion','regionRest','appUpload','uploadRest','appCenter','centerRest','appLogin','loginRest']).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        redirectTo: '/user'
      }).when('/dashboard', {
        templateUrl: 'views/dashboard.html'
      }).when('/user', {
        templateUrl: 'views/user/user.html',
          controller:'user'
      }).when('/user/createuser', {
        templateUrl: 'views/user/createuser.html',
          controller: 'createuser'
      }).when('/user/delete/:id',{
          templateUrl: 'views/user/deleteuser.html',
          controller:'deleteuser'
      }).when('/user/edit/:id',{
          templateUrl: 'views/user/updateuser.html',
          controller:'edituser'  
      }).when('/article', {
        templateUrl: 'views/article/showarticle.html',
          controller:'article'
      }).when('/article/createarticle', {
        templateUrl: 'views/article/createarticle.html',
          controller: 'createarticle'
      }).when('/article/delete/:id',{
          templateUrl: 'views/article/deletearticle.html',
          controller:'deletearticle'
      }).when('/article/edit/:id',{
          templateUrl: 'views/article/updatearticle.html',
          controller:'editarticle'
          
      }).when('/scheduler', {
        templateUrl: 'views/scheduler/showscheduler.html',
          controller:'scheduler'
      }).when('/scheduler/createscheduler', {
        templateUrl: 'views/scheduler/createscheduler.html',
          controller: 'createscheduler'
      }).when('/scheduler/delete/:id',{
          templateUrl: 'views/scheduler/deletescheduler.html',
          controller:'deletescheduler'
      }).when('/scheduler/edit/:id',{
          templateUrl: 'views/scheduler/updatescheduler.html',
          controller:'editscheduler'
          
      }).when('/notification', {
        templateUrl: 'views/notification/shownotification.html',
          controller:'notification'
      }).when('/notification/createnotification', {
        templateUrl: 'views/notification/createnotification.html',
          controller: 'createnotification'
      }).when('/notification/delete/:id',{
          templateUrl: 'views/notification/deletenotification.html',
          controller:'deletenotification'
      }).when('/notification/edit/:id',{
          templateUrl: 'views/notification/updatenotification.html',
          controller:'editnotification'
      
      }).when('/video', {
        templateUrl: 'views/video/showvideo.html',
          controller:'video'
      }).when('/video/createvideo', {
        templateUrl: 'views/video/createvideo.html',
          controller: 'createvideo'
      }).when('/video/delete/:id',{
          templateUrl: 'views/video/deletevideo.html',
          controller:'deletevideo'
      }).when('/video/edit/:id',{
          templateUrl: 'views/video/updatevideo.html',
          controller:'editvideo'
          
      }).when('/image', {
        templateUrl: 'views/image/showimage.html',
          controller:'image'
      }).when('/image/createimage', {
        templateUrl: 'views/image/createimage.html',
          controller: 'createimage'
      }).when('/image/delete/:id',{
          templateUrl: 'views/image/deleteimage.html',
          controller:'deleteimage'
      }).when('/image/edit/:id',{
          templateUrl: 'views/image/updateimage.html',
          controller:'editimage'
          
      }).when('/vote', {
        templateUrl: 'views/vote/showvote.html',
          controller:'vote'
      }).when('/vote/createvote', {
        templateUrl: 'views/vote/createvote.html',
          controller: 'createvote'
      }).when('/vote/delete/:id',{
          templateUrl: 'views/vote/deletevote.html',
          controller:'deletevote'
      }).when('/vote/edit/:id',{
          templateUrl: 'views/vote/updatevote.html',
          controller:'editvote'
          
      }).when('/registeruser', {
        templateUrl: 'views/registeruser/showregisteruser.html',
          controller:'registeruser'
      }).when('/registeruser/createregisteruser', {
        templateUrl: 'views/registeruser/createregisteruser.html',
          controller: 'createregisteruser'
      }).when('/registeruser/delete/:id',{
          templateUrl: 'views/registeruser/deleteregisteruser.html',
          controller:'deleteregisteruser'
      }).when('/registeruser/edit/:id',{
          templateUrl: 'views/registeruser/updateregisteruser.html',
          controller:'editregisteruser'
          
      }).when('/membership', {
        templateUrl: 'views/membership/showmembership.html',
          controller:'membership'
      }).when('/membership/createmembership', {
        templateUrl: 'views/membership/createmembership.html',
          controller: 'createmembership'
      }).when('/membership/delete/:id',{
          templateUrl: 'views/membership/deletemembership.html',
          controller:'deletemembership'
      }).when('/membership/edit/:id',{
          templateUrl: 'views/membership/updatemembership.html',
          controller:'editmembership'
          
      }).when('/state', {
        templateUrl: 'views/state/showstate.html',
          controller:'state'
      }).when('/state/createstate', {
        templateUrl: 'views/state/createstate.html',
          controller: 'createstate'
      }).when('/state/delete/:id',{
          templateUrl: 'views/state/deletestate.html',
          controller:'deletestate'
      }).when('/state/edit/:id',{
          templateUrl: 'views/state/updatestate.html',
          controller:'editstate'
          
      }).when('/mlaconstituency', {
        templateUrl: 'views/mlaconstituency/showmlaconstituency.html',
          controller:'mlaconstituency'
      }).when('/mlaconstituency/createmlaconstituency', {
        templateUrl: 'views/mlaconstituency/createmlaconstituency.html',
          controller: 'createmlaconstituency'
      }).when('/mlaconstituency/delete/:id',{
          templateUrl: 'views/mlaconstituency/deletemlaconstituency.html',
          controller:'deletemlaconstituency'
      }).when('/mlaconstituency/edit/:id',{
          templateUrl: 'views/mlaconstituency/updatemlaconstituency.html',
          controller:'editmlaconstituency'
          
      }).when('/mpconstituency', {
        templateUrl: 'views/mpconstituency/showmpconstituency.html',
          controller:'mpconstituency'
      }).when('/mpconstituency/creatempconstituency', {
        templateUrl: 'views/mpconstituency/creatempconstituency.html',
          controller: 'creatempconstituency'
      }).when('/mpconstituency/delete/:id',{
          templateUrl: 'views/mpconstituency/deletempconstituency.html',
          controller:'deletempconstituency'
      }).when('/mpconstituency/edit/:id',{
          templateUrl: 'views/mpconstituency/updatempconstituency.html',
          controller:'editmpconstituency'
          
      }).when('/position', {
        templateUrl: 'views/position/showposition.html',
          controller:'position'
      }).when('/position/createposition', {
        templateUrl: 'views/position/createposition.html',
          controller: 'createposition'
      }).when('/position/delete/:id',{
          templateUrl: 'views/position/deleteposition.html',
          controller:'deleteposition'
      }).when('/position/edit/:id',{
          templateUrl: 'views/position/updateposition.html',
          controller:'editposition'
          
          
      }).when('/region', {
        templateUrl: 'views/region/showregion.html',
          controller:'region'
      }).when('/region/createregion', {
        templateUrl: 'views/region/createregion.html',
          controller: 'createregion'
      }).when('/region/delete/:id',{
          templateUrl: 'views/region/deleteregion.html',
          controller:'deleteregion'
      }).when('/region/edit/:id',{
          templateUrl: 'views/region/updateregion.html',
          controller:'editregion'
          
      }).when('/upload', {
        templateUrl: 'views/upload/showupload.html',
          controller:'upload'
      }).when('/upload/createupload', {
        templateUrl: 'views/upload/createupload.html',
          controller: 'createupload'
      }).when('/upload/delete/:id',{
          templateUrl: 'views/upload/deleteupload.html',
          controller:'deleteupload'
      }).when('/upload/edit/:id',{
          templateUrl: 'views/upload/updateupload.html',
          controller:'editupload'
          
      }).when('/center', {
        templateUrl: 'views/center/showcenter.html',
          controller:'center'
      }).when('/center/createcenter', {
        templateUrl: 'views/center/createcenter.html',
          controller: 'createcenter'
      }).when('/center/delete/:id',{
          templateUrl: 'views/center/deletecenter.html',
          controller:'deletecenter'
      }).when('/center/edit/:id',{
          templateUrl: 'views/center/updatecenter.html',
          controller:'editcenter'
          
      }).when('/login',{
          templateUrl: 'views/login/login.html',
          controller:'login'
          
      }).when('/ui/typography', {
        templateUrl: 'views/ui/typography.html'
      }).when('/ui/buttons', {
        templateUrl: 'views/ui/buttons.html'
      }).when('/ui/icons', {
        templateUrl: 'views/ui/icons.html'
      }).when('/ui/grids', {
        templateUrl: 'views/ui/grids.html'
      }).when('/ui/widgets', {
        templateUrl: 'views/ui/widgets.html'
      }).when('/ui/components', {
        templateUrl: 'views/ui/components.html'
      }).when('/ui/timeline', {
        templateUrl: 'views/ui/timeline.html'
      }).when('/ui/nested-lists', {
        templateUrl: 'views/ui/nested-lists.html'
      }).when('/ui/pricing-tables', {
        templateUrl: 'views/ui/pricing-tables.html'
      }).when('/forms/elements', {
        templateUrl: 'views/forms/elements.html'
      }).when('/forms/layouts', {
        templateUrl: 'views/forms/layouts.html'
      }).when('/forms/validation', {
        templateUrl: 'views/forms/validation.html'
      }).when('/forms/wizard', {
        templateUrl: 'views/forms/wizard.html'
      }).when('/maps/gmap', {
        templateUrl: 'views/maps/gmap.html'
      }).when('/maps/jqvmap', {
        templateUrl: 'views/maps/jqvmap.html'
      }).when('/tables/static', {
        templateUrl: 'views/tables/static.html'
      }).when('/tables/responsive', {
        templateUrl: 'views/tables/responsive.html'
      }).when('/tables/dynamic', {
        templateUrl: 'views/tables/dynamic.html'
      }).when('/charts/others', {
        templateUrl: 'views/charts/charts.html'
      }).when('/charts/morris', {
        templateUrl: 'views/charts/morris.html'
      }).when('/charts/flot', {
        templateUrl: 'views/charts/flot.html'
      }).when('/mail/inbox', {
        templateUrl: 'views/mail/inbox.html'
      }).when('/mail/compose', {
        templateUrl: 'views/mail/compose.html'
      }).when('/mail/single', {
        templateUrl: 'views/mail/single.html'
      }).when('/pages/features', {
        templateUrl: 'views/pages/features.html'
      }).when('/pages/signin', {
        templateUrl: 'views/pages/signin.html'
      }).when('/pages/signup', {
        templateUrl: 'views/pages/signup.html'
      }).when('/pages/forgot', {
        templateUrl: 'views/pages/forgot-password.html'
      }).when('/pages/lock-screen', {
        templateUrl: 'views/pages/lock-screen.html'
      }).when('/pages/profile', {
        templateUrl: 'views/pages/profile.html'
      }).when('/404', {
        templateUrl: 'views/pages/404.html'
      }).when('/pages/500', {
        templateUrl: 'views/pages/500.html'
      }).when('/pages/blank', {
        templateUrl: 'views/pages/blank.html'
      }).when('/pages/invoice', {
        templateUrl: 'views/pages/invoice.html'
      }).when('/pages/services', {
        templateUrl: 'views/pages/services.html'
      }).when('/pages/about', {
        templateUrl: 'views/pages/about.html'
      }).when('/pages/contact', {
        templateUrl: 'views/pages/contact.html'
      }).when('/tasks', {
        templateUrl: 'views/tasks/tasks.html'
      }).otherwise({
        redirectTo: '/404'
      });
    }
  ]);

}).call(this);





//# sourceMappingURL=app.js.map
