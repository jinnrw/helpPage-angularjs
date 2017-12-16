var helpApp = angular.module('helpApp', ['ngRoute']);

helpApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // .when('/how-do-I-create', {
    //   templateUrl: 'topic/topic_1.html',
    //   // controller: 'topicController_1'
    // })
    .when('/:slug', {
      templateUrl: 'topic/topic_2.html',
      controller: 'topicController'
    })
}]);

// helpApp.controller('topicController_1', function ($scope, $routeParams) {
//   $scope.name = 'topicController_1';
//   $scope.params = $routeParams;
// })

helpApp.controller('topicController',
  function ($scope, $routeParams) {
    var topicSlug = $routeParams.slug;
    $scope.topics = {
      "how-do-I-create": {
        name: "How Do I Create a Photo Centre Account?",
        content: "That's it! You can now upload photos, create photo gifts, share your photos with friends and family, and much more. Please note that if you try to upload images or create a photo gift you will automatically be prompted to sign in or create a new account. You must create an account to order any photo items from the Costco Photo Centre.",
        slug: "/how-do-I-create"
      }, 
      "editing-your-account-settings": {
        name: "Editing Your Account Settings",
        content: "You can modify your account settings at any time by clicking the \"My Account\" link in the top right corner of your screen or by clicking on this link. From the Account page you can update your Costco membership details, contact information, Photo Centre password, and much more.",
        slug: "/editing-your-account-settings"
      },
      "uploading-photos": {
        name: "Uploadign Photos",
        content: "Uploading your images using Costco's online uploader is a simple process regardless of where your photos are stored.",
        slug: "/editing-your-account-settings"
      },
      "importing-from-social-media": {
        name: "Importing from Social Media",
        content: "The Social Media uploader lets you easily import multiple photos from social media and cloud services to your Costco Photo Centre account. When you import a digital photo to your online account, only a copy of it is placed in your account. The original digital photo file remains unchanged at its original source.",
        slug: "/editing-your-account-settings"
      }
    };

    $scope.topic = $scope.topics[topicSlug];
})


helpApp.controller('categoryLoaderCtrl', function categoryLoaderCtrl($scope, $location) {
  $scope.categories = [
    {
      name: "Managing Your Account",
      links: [
        {
          title: "How Do I Create a Photo Centre Account?",
          href: "/how-do-I-create"
        }, {
          title: "Editing Your Account Settings",
          href: "/editing-your-account-settings"
        }
      ]
    }, {
      name: "Uploading Photos",
      links: [
        {
          title: "Uploading Photos",
          href: "/uploading-photos"
        }, {
          title: "Importing from Social Media",
          href: "/importing-from-social-media"
        }
      ]
    }
  ];

  $scope.activeCategory = $scope.categories[0];

  $scope.isActiveCategory = function (category) {
    return category == $scope.activeCategory;
  }

  $scope.setActiveCategory = function (category) {
    $scope.activeCategory = category;
  }

  $scope.isActiveLink = function (link) {
    return link.href === $location.path();
  }

  $scope.activeLink = function (path) {
    $location.path(path);
  }

})