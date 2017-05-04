var myApp = angular.module('mainApp', ['ngRoute']);
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(
	{
		enabled: true,
		requireBase: false
	});
	$routeProvider
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutController',
			activetab: 'about'
		})
		.when('/experience', {
			templateUrl: 'views/experience.html',
			controller: 'experienceController',
			activetab: 'experience'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactController',
			activetab: 'contact'
		})
		.otherwise({ redirectTo: '/about' });
}]);
myApp.run(['$rootScope', "$route", function ($scope, $route) {
	$scope.$on("$routeChangeSuccess", function (scope, next, current) {
      $scope.activetab = $route.current.activetab;
    });
}]);

myApp.controller('mainController', ['$scope', function($scope) {
	
}]);

myApp.controller('aboutController', function($scope) {
	$scope.skillz = [
		{ skillName: "HTML", skillAmount: "74" },
		{ skillName: "CSS", skillAmount: "74" },
		{ skillName: "Javascript", skillAmount: "80" },
		{ skillName: "jQuery", skillAmount: "76" },
		{ skillName: "Databases", skillAmount: "66" },
		{ skillName: "C++", skillAmount: "72" },
		{ skillName: "Python", skillAmount: "70" },
		{ skillName: "Java", skillAmount: "70" },
		{ skillName: "UI/UX", skillAmount: "75" }
	];
});

myApp.controller('experienceController', function($scope, $sce, ModalService) {
	$scope.projectz = [
		{
			modalID: "seagate",
			label: "Seagate Technologies",
			folder: "folder.png",
			modalContent: "Working on the WBI team (Web Based Interface). Similar to a router, going to the IP adress of our storage systems will bring up the WBI. From there, the user can set up the all the system settings, provision storage, and map the storage to external hosts for use. The WBI is build using a custom C++ web server process on the backend and a custom Javascript/jQuery framework"
			             + "<br>"
                    + "Responsibilities include:"
                    + "<ul>"
                    +    "<li>"
                    +        "<b>Fixing bugs</b> - We operate on a release driven schedule and go through rigorous testing. Our testing includes many new features, many different languages, and supporting all major browsers. This is what I have spent most of my time doing here, but I have learned a lot during my time fixing these bugs."
                    +    "</li>"
                    +    "<li>"
                    +        "<b>Testing framework</b> - We did not have any testing framework for our front end framework. Worked on developing a automated testing environment for our front end."
                    +        "I built..."
                    +    "</li>"
                    +        "<b>Deprecating the old v2 interface</b> - We were managing two interfaces at the same time, which resulted in a lot of bugs and a lot of time. I worked on merging all functionality of the older v2 interface into the v3 interface, so that we could deprecate the old interface."
                    +    "<li>"
                    +        "<b>Professional communication</b> - All design changes needed to be well documented so that our OEM customers are aware of all changes to the interface. There is also a fair amount of collaboration that is necessary between WBI and other teams in order to implement new features."
                    +    "</li>"
                    +    "<li>"
                    +        "<b>CTK (Customization Tool Kit)</b> - The CTK is a tool for our OEM customers to customize the web interface with their own company name, logos, images, colors, and other CSS properties. This tool basically consisted of a \"CTK.zip\" file that we send to the customer. When unzipped, it contains a bunch of perl scripts and all our images, CSS, and other customization files. The customer has to follow directions in a separate document and eventually creates a \"CUSTOMIZATION.zip\" file they send back to us. We use this file to create a binary file to install on the system, and send that back to the customer. This whole process was a huge pain in the a** for both the customers and for myself. Realizing an obvious problem to the process, I started a side project to create a web based solution that customers can use to create and download their CTKs. This web application was built with Node.js."
                    +    "</li>"
                    +"<uL>"
		},
		{
			modalID: "timewarner",
			label: "Time Warner Cable",
			folder: "folder.png",
			modalContent: "I had the opportunity to work on the \"Big Data\" team during a 10 week summer internship at Time Warner. I worked together with a senior software developer helping him with a single page web application inteded to be used by Data Scientists for displaying and analyzing various sources of data that Time Warner collects. I created a Node.js server that communicated with a MongoDB database for saving specific chart configurations that Data Scientists want to save and view again. I also worked on various frontend bugs. The front end was built with Vue.js, Foundation, and C3.js."
		},
		{
			modalID: "correll",
			label: "Correll Lab",
			folder: "folder.png",
			modalContent: "The Correll Lab is a robotics research lab in the basement of the Engineering Center at CU. I worked on the swarm robotics \"Droplets\" project, using small ping-pong ball sized robots. These robots had capabilities to emit signals for communication and could find range and bearing to each other. My project consisted of writing the \"main\" C++ code that runs on each robot, and used their capabilities to arrange themselves into the shape of a guitar."
		},
		{
			modalID: "senior",
			label: "Senior Project",
			folder: "folder.png",
			modalContent: "My senior project was a partnership with TripAdvisor to create a mobile app for business owners. We decided to build an Android app, using Android Studio and Java. The app's capabilities included the ability to log in and view all properties, amenities, descriptions, photos, and reviews. This project also consisted of gathering research about our users, including interviews with business owners and TripAdvisor users."
		},
		{
			modalID: "dynamic",
			label: "Dynamic Scooters",
			folder: "folder.png",
			modalContent: "I built an e-commerce online store for a local pro scooter shop that is owned by a friend. The front end uses Angular and jQuery. The website also included an \"Admin\" page, where the owner of the store can see orders, change images, and manage the inventory of products available. The back end uses Node.js, and includes many features including an emailing service, communication with a postGres database, sessions, and communication to AWS S3. Unfortunately the website has not performed well and cannot compete with other online prices, so the site will soon been taken down."
		},
		{
			modalID: "this",
			label: "This site",
			folder: "folder.png",
			modalContent: "This website was a litle side project for me to learn how Angular works a little more. You can see the code for it <a href=\"https://github.com/sambeckett303/resume\">on github</a>.")
		},
		{
			modalID: "scrollmagic",
			label: "Parallax Scrolling Resume",
			folder: "folder.png",
			modalContent: "Created a paralax scrolling resume as a side project during the summer of 2014. This was built using the Scrollmagic framework, and uses many pretty CSS features. You can view the scrolling website <a href=\"http://www.samuelbeckett.info\">here</a>."
		}
	];
	$scope.folderMouseover = function () {
		this.project.folder = "folderEdit.png"
	};
	$scope.folderMouseleave = function () {
		this.project.folder = "folder.png"
	};
	$scope.openModal = function(e) {
		var id = e.currentTarget.id;
		ModalService.setModalContent(this.project.modalContent);
		ModalService.setModalTitle(this.project.label);
		ModalService.Open(e);
	};
	$scope.closeModal = function() {
		ModalService.Close();
	};
});

myApp.controller('contactController', function() {});

myApp.controller('modalController', function($scope, ModalService) {
	
	$scope.$watch(function () { 
		var b = ModalService.getModalContent();
		if (b.$$unwrapTrustedValue)
			return b.$$unwrapTrustedValue();
		else
			return b;
	}, function (newValue, oldValue) {
        if (newValue != null || newValue != oldValue) {
            //update Controller2's xxx value
            $scope.modalContent= newValue;
        }
    }, true);
    $scope.$watch(function () { return ModalService.getModalTitle(); }, function (newValue, oldValue) {
        if (newValue != null || newValue != oldValue) {
            //update Controller2's xxx value
            $scope.modalTitle = newValue;
        }
    }, true);
});

myApp.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

